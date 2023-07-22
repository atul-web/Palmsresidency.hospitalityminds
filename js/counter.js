 const customersServed = document.getElementById('customers-served');
  const roomsAvailable = document.getElementById('rooms-available');
  const happyCustomers = document.getElementById('happy-customers');
  const professionalStaffs = document.getElementById('professional-staffs');

  let countCustomersServed = 0;
  let countRoomsAvailable = 0;
  let countHappyCustomers = 0;
  let countProfessionalStaffs = 0;

  const intervalId = setInterval(() => {
    // increment the counters
    countCustomersServed += 5;
    countRoomsAvailable += 25;
    countHappyCustomers += 3;
    countProfessionalStaffs += 2;

    // update the counter elements
    customersServed.innerText = (countCustomersServed < 20 ? countCustomersServed.toString() + '+' : '20+');
    roomsAvailable.innerText = (countRoomsAvailable < 100 ? countRoomsAvailable.toString() + '%' : '100%');
    happyCustomers.innerText = (countHappyCustomers < 10 ? countHappyCustomers.toFixed(1) + '+' : '10+');
    professionalStaffs.innerText = (countProfessionalStaffs < 10 ? countProfessionalStaffs.toString() + '+' : '10+');

    // check if all counters have reached their final values and stop the countdown
    if (countCustomersServed >= 1000 && countRoomsAvailable >= 18 && countHappyCustomers >= 98.9 && countProfessionalStaffs >= 10) {
      clearInterval(intervalId);
    }
  }, 1000);