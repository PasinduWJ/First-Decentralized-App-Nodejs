const displayGreeting = async (greeting, contract) => {
    greeting = await contract.methods.sayHello().call();
    $("h2").html(greeting);
  };
  const updateGreeting = (greeting, contract, accounts) => {
    let input;
    $("#input").on("change", (e) => {
      input = e.target.value;
    });
    $("#form").on("submit", async (e) => {
      e.preventDefault();
      await contract.methods
        .updateGreeting(input)
        .send({ from: accounts[0], gas: 40000 });
      displayGreeting(greeting, contract);
    });
  };
  async function greetingApp() {
    const web3 = await getWeb3();
    console.log(web3);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const contract = await getContract(web3);
    console.log(contract);
    let greeting;
  displayGreeting(greeting, contract);
    updateGreeting(greeting, contract, accounts);
  }
  greetingApp();