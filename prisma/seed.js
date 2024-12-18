const prisma = require("../prisma");
const seed = async () => {
  
  const createCustomer = async () => 
    {
        const customer = 
        [
            {name: "Peter"},
            {name: "Ben"},
            {name: "Nick"},
            {name: "Stephen"},
            {name: "Mark"},
            {name: "Jesus Christ"}
        ];

        await prisma.customer.createMany({ data: customer });
        console.log("Customers created.");
    };
  
  const createRestaurant = async () => 
    {
        const restaurant = 
        [
            {name: "Chevy's"},
            {name: "Red Lobster"},
            {name: "Mr. Chou Chinese Restaurant"},
            {name: "Sam's BBQ"},
            {name: "PF Chengs"},
            {name: "Buffallo Wild Wings"},
            {name: "BJ's"},
            {name: "Gen's Korean BBQ"}
        ];

        await prisma.restaurant.createMany({ data: restaurant });
        console.log("Restaurants created.");
    };

    const createReservation = async () => 
    {
        const reservation = 
        [
          { customerId: 1, restaurantId: 1, date: new Date("2024-07-01"), partyCount: 4 },
          { customerId: 2, restaurantId: 2, date: new Date("2024-12-01"), partyCount: 2 },
          { customerId: 3, restaurantId: 5, date: new Date("2024-12-10"), partyCount: 6 },
        ];

        await prisma.reservation.createMany({ data: reservation });
        console.log("Reservations created.");
    };
  
    await createCustomer();
    await createRestaurant();
    await createReservation();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });