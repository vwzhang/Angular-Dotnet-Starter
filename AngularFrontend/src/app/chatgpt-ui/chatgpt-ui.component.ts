import { Component } from '@angular/core';
import { ChatGPTService } from '../chat-gpt.service';

@Component({
  selector: 'app-chatgpt-ui',
  templateUrl: './chatgpt-ui.component.html',
  styleUrls: ['./chatgpt-ui.component.css']
})
export class ChatgptUiComponent {
  chatGPTresponse: string = "";
  prompt: string = "";

  constructor(private service: ChatGPTService) {

  }

  sendMessage() {
    this.prompt = "你好";
    this.chatGPTresponse += this.prompt + "\n";

    this.service.getCompletion(this.prompt).subscribe(
      (completion: string) => {
        this.chatGPTresponse += completion;
      },
      (error: any) => {
        console.error(error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }
}
