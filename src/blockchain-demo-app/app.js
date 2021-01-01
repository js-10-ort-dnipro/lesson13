    
    import SHA256 from './sha256.js';

    const __DATA__      = ['Jack Smith', 'Amanda Jones', 'Peter Gates', 'Mary Adams', 'Julia Marshall'];

    const __DIFFICULT__ = 3; // e.q. '0000...' Hash Start;

    const __PATTERN__   = '0'.repeat(__DIFFICULT__); // Create Pattern '0000...' by __DIFFICULT__
   
    /*
    
        1) Add 'ZERO Block' (aka 'Genesis Block');

        2) Transfrom to 
        
        { 
            data: 'block-data', 
            hash: sha256('block-data')
        };
        
    */

    let blockChain = ['ZERO BLOCK', ...__DATA__]
                        .map(item => ({ 
                            data: item, 
                            hash: SHA256.hash(item) 
                        }));

    let startTime = performance.now();

    for(let i = 1 ; i < blockChain.length; i++){

        for(let proofOfWork = 0; /* Endless */ ; proofOfWork++){

            let currentData = blockChain[i].data;
            let prevHash    = blockChain[i-1].hash; 

            let hash = SHA256.hash(currentData + prevHash + proofOfWork);

            if(hash.substr(0, __DIFFICULT__) === __PATTERN__){
                blockChain[i].proofOfWork = proofOfWork;
                blockChain[i].hash = hash;

                break;
            }
        }

       console.log(blockChain[i]); // Show Current Block in Blockchain
    }

    let totalTimeSpent = ((performance.now() - startTime) / 1000);
    let averageTimeSpent = totalTimeSpent / __DATA__.length;

    console.log(`Total Time: ${totalTimeSpent.toFixed(3)} s.`)
    console.log(`Average Time (by One Block): ${averageTimeSpent.toFixed(3)} s.`);
    
    console.log(blockChain); //Show All BlockChain Array