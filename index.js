const caltemp = () => {
    const tempnum = document.getElementById('temp').value;

    const optiontempr = document.getElementById('temp_diff');
    const tempvalue = temp_diff.options[optiontempr.selectedIndex].value;

    const celToFeh = (cel) => {
        let F = Math.round((cel * 9 / 5) + 32);
        return F;
    }

    const FehTocel = (feh) => {
        let C = Math.round((feh - 32) * 9 / 5);
        return C;
    }

    let result;

    if (tempvalue == 'cel') {
        result = celToFeh(tempnum);
        document.getElementById('output').innerHTML = ` ${result}℉ `;
    }
    else {
        result = FehTocel(tempnum);
        document.getElementById('output').innerHTML = ` ${result}℃ `;

    }
}