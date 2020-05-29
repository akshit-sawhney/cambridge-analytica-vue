<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: ['teachers'],
  mounted() {
    
  },
  watch: {
  teachers(val, oldVal) {
    if (val && val.data && val.data.length) {
       const angerValue = val.data[0].anger;
        const fearValue = val.data[0].fear;
        const joyValue = val.data[0].joy;
        const sadnessValue = val.data[0].sadness;
        this.renderChart(
        {
          labels: [
            "Anger",
            "Joy",
            "Fear",
            "Sadness"
          ],
          datasets: [
            {
              label: "Teacher data",
              fill: true,
              backgroundColor: "rgba(39, 128, 227, 0.1)",
              borderColor: "rgba(39, 128, 227, 1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(39, 128, 227, 1)",
              pointBorderColor: "#fff",
              data: [angerValue, joyValue, fearValue, sadnessValue]
            }
          ]
        },
        { 
          responsive: true,
          maintainAspectRatio: true,
          scale: {
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }
        }
      );
    }
  }
}
};
</script>