function alp(ch) {
    ch = ch.toUpperCase();
    for (let i = 0; i < ch.length; i++) {
        if (!(ch.charAt(i) >= 'A' && ch.charAt(i) <= 'Z')) {
            return false;
        }
    }
    return true;
}

function alp2(ch) {
    ch = ch.toUpperCase();
    for (let i = 0; i < ch.length; i++) {
        if (ch.charAt(i) === '@' || !(ch.charAt(i).match(/[A-Z0-9.-]/))) {
            return false;
        }
    }
    return true;
}

function email(ch) {
    var atIndex = ch.indexOf("@");
    var dotIndex = ch.lastIndexOf(".");
    
    if (atIndex === -1 || dotIndex === -1 || atIndex > dotIndex) {
        return false;
    }
    
    var ch1 = ch.substring(0, atIndex);
    var ch2 = ch.substring(atIndex + 1, dotIndex);
    var ch3 = ch.substring(dotIndex + 1);
    
    if (ch1.length === 0 || ch2.length === 0 || ch3.length === 0) {
        return false;
    }
    
    if (ch3.length > 3 || ch3.length <= 1) {
        return false;
    }
    
    if (ch2.includes('.')) {
        let parts = ch2.split('.');
        for (let part of parts) {
            if (!alp2(part)) {
                return false;
            }
        }
    } else {
        if (!alp2(ch2)) {
            return false;
        }
    }
    
    return true;
}

function verif1() {
    var n = document.getElementById('n').value;
    var pr = document.getElementById('pr').value;
    var t = document.getElementById('t').value;
    var e = document.getElementById('e').value;
    var m = document.getElementById('m').value;
    

    // Clear previous error messages
    document.getElementById('nomError').innerHTML = "";
    document.getElementById('prenomError').innerHTML = "";
    document.getElementById('telError').innerHTML = "";

    if (n.length === 0 || !alp(n)) {
        document.getElementById('nomError').innerHTML = "Veuillez vérifier votre nom";
        return false;
    }

    if (pr.length === 0 || !alp(pr)) {
        document.getElementById('prenomError').innerHTML = "Veuillez vérifier votre prénom";
        return false;
    }

    if (t.length !== 8 || isNaN(t)) {
        if (t.length !== 8) {
            document.getElementById('telError').innerHTML = "Le numéro de téléphone doit contenir exactement 8 chiffres";
        } else {
            document.getElementById('telError').innerHTML = "Le numéro de téléphone doit contenir des chiffres uniquement";
        }
        return false;
    }

    if (e.length === 0 || !email(e)) {
        document.getElementById('emailError').innerHTML = "Veuillez vérifier votre email";
        return false;
    }
}


