function RSA() {
    
    var gcd, p, q, no, n, t, e, i, x;
    gcd = function (a, b) { return (!b) ? a : gcd(b, a % b); }; //računa najveci zajednicki djelitelj
    
    p = document.getElementById('p').value;
    q = document.getElementById('q').value;
    no = document.getElementById('msg').value;
    
    n = p * q;
    t = (p - 1) * (q - 1);
    for (e = 2; e < t; e++) //pronalazi javni eksponent
    {
        if (gcd(e, t) == 1)
        {
            break;
        }
    }
    for (i = 0; i < 10; i++) //pronalazi najmanji moguci privatni eksponent
    {
        x = 1 + i * t
        if (x % e == 0)
        {
            d = x / e;
            break;
        }
    }
    
    ctt = Math.pow(no, e).toFixed(0); //toFixed(0) znaci da uzima cijeli broj bez ikakvih decimala
    ct = ctt % n;

    document.getElementById('keylength(N)').innerHTML = n;
    document.getElementById('totient(φ(N))').innerHTML = t;
    document.getElementById('publicexponent(e)').innerHTML = e;
    document.getElementById('privateexponent(d)').innerHTML = d;

    document.getElementById('publickey').innerHTML = e;
    document.getElementById('publickeylength').innerHTML = n;
    document.getElementById('privatekey').innerHTML = d;
    document.getElementById('privatekeylength').innerHTML = n;

    document.getElementById('ciphertext(ct)').innerHTML = ct;
}