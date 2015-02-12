/*// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());*/
// ==========================================================

/*// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];    

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);

    self.addSeat = function() {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    };

    self.removeSeat = function(seat) {
        self.seats.remove(seat);
    };

    self.totalCharge = ko.computed(function() {
        var total = 0;
        for(var i = 0; i < self.seats().length; i++) {
            total+= self.seats()[i].meal().price;
        }
        return total;
    });

}
    

ko.applyBindings(new ReservationsViewModel());*/
// ================================================================

/*function WebmailViewModel() {
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    //behaviors
    self.goToFolder = function(folder) { self.chosenFolderId(folder); };
};

ko.applyBindings(new WebmailViewModel());*/

//=================================================================