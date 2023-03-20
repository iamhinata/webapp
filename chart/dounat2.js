window.onload = function () {
    let context = document.querySelector("#dounut").getContext('2d')
    new Chart(context, {
        type: 'doughnut',
        data: {
            labels: ["JavasScript", "CSS", "PHP", "HTML", "Laravel","SQL","SHELL","情報システム基礎知識（その他）"],
            datasets: [{
                data: [42, 18, 10, 8, 8,5,5,4],
                backgroundColor: [
                    "#0033cc", 
                    "#006699", 
                    "#00ced1", 
                    "#33ccff",
                    "#a8a8ff", 
                    "#9966cc", 
                    "#6633ff",
                    "#000066"]
            }],
            
        },
        options: {
            responsive: false,
        }
    });
}