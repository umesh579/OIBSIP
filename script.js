const tempcalc = () => {

    const tempnum = document.getElementById('Num').value;
    //   console.log(tempnum);

    const tempname = document.getElementById('temp_diff');
    const tempselect = temp_diff.options[tempname.selectedIndex].value;
    // console.log(tempselect);
    const celtofah = (cel) => {
        let fehrenheit = Math.round((cel * 9 / 5) + 32);
        return fehrenheit;
    }
    const fehtocel = (fehr) => {
        let Celsius = Math.round((fehr - 32) * 5 / 9);
        return Celsius;
    }
    let result;
    if (tempselect == 'Celcius') {
        result = celtofah(tempnum);
        document.getElementById('Result').innerHTML = `= ${result}°farenheit`;

    } else {
        result = fehtocel(tempnum);
        document.getElementById('Result').innerHTML = `= ${result}°Celsius`;
    }
}
