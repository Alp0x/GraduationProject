public class Emotion
{
    public double Anger { get; set; }
    public double Contempt { get; set; }
    public double Disgust { get; set; }
    public double Fear { get; set; }
    public double Happiness { get; set; }
    public double Neutral { get; set; }
    public double Sadness { get; set; }
    public double Surprise { get; set; }
    public DateTime Time { get; set; } = DateTime.Now;

    public override string ToString()
    {
        return $"{Anger},{Contempt},{Disgust},{Fear},{Happiness},{Neutral},{Sadness},{Surprise},{Time}";
    }
    public int UserId { get; set; }
}