function submit(){

    let selectedBatchTiming = [];

   document.querySelectorAll("input[name='batch']:checked").forEach((element) => {
  selectedBatchTiming.push(element.value);
});

console.log(selectedBatchTiming);

}
