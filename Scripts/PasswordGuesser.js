function guessPass(){
    var alphabet = " abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?,./;'[]\|'ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            password = document.getElementById("password");
    password = password.elements["pass"].value;
    
    var i1 = 0,
            i2 = 0,
            i3 = 0,
            i4 = 0,
            i5 = 0,
            found = false,
            guess = "";

    var start = performance.now();
    while (!found && i5 < alphabet.length) {
        guess = alphabet.charAt(i5);
        if (i4 >= alphabet.length) {
            i4 = 0;
        }
        while (!found && i4 < alphabet.length) {
            guess = guess.charAt(0) + alphabet.charAt(i4);
            if (i3 >= alphabet.length) {
                i3 = 0;
            }
            while (!found && i3 < alphabet.length) {
                guess = guess.charAt(0) + guess.charAt(1) + alphabet.charAt(i3);
                if (i2 >= alphabet.length) {
                    i2 = 0;
                }
                while (!found && i2 < alphabet.length) {
                    guess = guess.charAt(0) + guess.charAt(1) + guess.charAt(2) + alphabet.charAt(i2);
                    if (i1 >= alphabet.length) {
                        i1 = 0;
                    }
                    while (!found && i1 < alphabet.length) {
                        guess = guess.charAt(0) + guess.charAt(1) + guess.charAt(2) + guess.charAt(3) + alphabet.charAt(i1);
                        guess = guess.replace(/\s/g, '');
                        found = (password === guess.toString());
                        i1++;
                    }
                    i2++;
                }
                i3++;
            }
            i4++;
        }
        i5++;
    }
    var time = performance.now() - start;

    if (found) {
        document.write("Your password is: " + guess);
        document.write("<br>Found your password in: " + Math.round(time)/1000 + " s");
    } else {
        document.write("Could not guess your password");
    }
} 