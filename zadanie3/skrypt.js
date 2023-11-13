function funkcja() {
    let tab1 = [1, 5, 10, 15];
    let tab2 = [1, 1, 3, 3, 4, 4, 4];
    let tab3 = ["ala", "robert", "stanislaw"];
    
function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

            }
        }
    }
}

function SecondMax(arr) {

    let max = 0;
    let secondMax = 0;

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] == "number") {

            max = arr[i];

            for (let j = 0; j < arr.length; j++) {

                if (arr[j] > max) {
                    
                    max = arr[j];
                    secondMax = arr[j - 1];

                }
            }
            return secondMax;

        } 
        else if (typeof arr[i] == "string") {

            max = arr[i];

            for (let j = 0; j < arr.length; j++) {

            if (arr[j].length > max.length) {

                max = arr[j];
                secondMax = arr[j - 1];

            }

            }
            return secondMax;
        }
    }
}
    BubbleSort(tab1);
    console.log(SecondMax(tab1));

    BubbleSort(tab2);
    console.log(SecondMax(tab2));

    BubbleSort(tab3);
    console.log(SecondMax(tab3));
  }

  funkcja();