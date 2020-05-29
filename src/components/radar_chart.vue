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
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [angerValue, joyValue, fearValue, sadnessValue]
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      );
    }
  }
}
};
</script>