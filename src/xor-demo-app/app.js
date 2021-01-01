
    let myData = 'Forza Ferrari!';

    const KEY = 42; 

    let chars = [...myData]
                    .map(i => i.charCodeAt(0));

    console.log('Original Chars: ', chars);

    /* Encrypt */

    let encryptedChars = chars.map(i => i ^ KEY);
    
    console.log('Encrypted Chars: ', encryptedChars);

    console.log('Encrypted Text: ', String
                                        .fromCharCode(...encryptedChars));

    /* Decrypt */
          
    let decryptedChars = encryptedChars.map(i => i ^ KEY);
    
    console.log('Encrypted Chars: ', decryptedChars);

    console.log('Encrypted Text: ', String
                                        .fromCharCode(...decryptedChars));