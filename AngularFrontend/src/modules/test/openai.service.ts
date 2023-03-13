import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor(client: HttpClient) { }

  public createCompletion(question: string): string {
    return "";
  }

  public createCompletionAsync()

  public listModels(): string[] {
    return [];
  }

  private makeRequest() {

  }

  private makeRequestAsync() {

  }

  private retrieveModel(model: string) {

  }

  private retriveModelAsync(model: string) {

  }

  private createEdit(request: any) {

  }

  public createEdiotAsync(request: any) {

  }

  private createImage() {

  }

  createImageAsync() {

  }

  createImageEdit() {

  }

  createImageEditAsync() {

  }
  
  createImageVariation() {

  }

  createEmbeddings() {

  }

  listFiles() {

  }

  uploadFile() {

  }

  deleteFile() {

  }

  retrieveFile() {

  }

  retrieveFIleContent() {

  }

  createFineTune() {

  }

  listFineTunes() {

  }

  retrieveFineTune() {

  }

  cancelFineTune() {

  }

  listFineTuneevents() {

  }

  deleteFineTuneModel(model: string) {

  }

  createModeration() {

  }
}
