namespace WebApiBackend.UI_Models
{
    public abstract class UiModel
    {
        public Guid Id { get; set; }
        public UiModel()
        {
            Id = Guid.NewGuid();
        }
    }
    public class NgGridListTile : UiModel
    {
        public int ColumnSpan { get; set; }
        public int RowSpan { get; set; }
        public string Label { get; set; }
        public string Color { get; set; }

        public NgGridListTile(string label, int colSpan, int rowSpan, string color)
        {
            ColumnSpan = colSpan;
            RowSpan = rowSpan;
            Label = label;
            Color = color;
        }
    }
    public class NgGridList : UiModel
    {
        public string Label { get; set; }
        public int Columns { get; set; }
        public string RowHeight { get; set; }
        public NgGridListTile[] Tiles { get; set; }
        public NgGridList(string label, int cols, NgGridListTile[] tiles, string rowHeight = "2:1")
        {
            Label = label;
            Columns = cols;
            RowHeight = rowHeight;
            Tiles = tiles;
        }

        public static NgGridList Sample => new NgGridList("Sample GridList", 4, 
        new NgGridListTile[] {
                new NgGridListTile("One", 3, 1, "lightblue"),
                new NgGridListTile("Two", 1, 2, "lightgreen"),
                new NgGridListTile("Three", 1, 1, "lightpink"),
                new NgGridListTile("Four", 2, 1, "#DDBDF1")
            }
        );
    }
}
