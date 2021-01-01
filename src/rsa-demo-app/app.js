
    // p = 257,      q = 263;
    // n = 67591,    f = 67072;
    // e = 5,        d = 26829;

    const openKey   = [5n, 67591n];
    const secretKey = [26829n, 67591n];

    let myData = 'Forza Ferrari!';

    let chars = [...myData]
                    .map(i => BigInt(i.charCodeAt(0)));

    console.log('Original Chars: ', chars);
    console.log('Original Text: ', myData);

    /* Encrypt */

    let encryptedChars = chars.map(i => (i ** openKey[0]) % openKey[1]);
    
    console.log('Encrypted Chars: ', encryptedChars);

    console.log('Encrypted Text: ', String
                                    .fromCharCode(...encryptedChars
                                        .map(i => Number(i))));

    /* Decrypt */
          
    let decryptedChars = encryptedChars.map(i => (i ** secretKey[0]) % secretKey[1]);
    
    console.log('Encrypted Chars: ', decryptedChars);

    console.log('Encrypted Text: ', String
                                        .fromCharCode(...decryptedChars
                                            .map(i => Number(i))));



                                            