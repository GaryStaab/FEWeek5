// 1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
//  a.	Use at least one array.
//  b.	Use at least two classes.
//  c.	Your menu should have the options to create, view, and delete elements.

// Define Vehicle class
class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.maintenanceItems = [];
    }
}
// Define Maintenance Items class
class MaintItem {
    constructor(maintenance,mileage,datePerformed) {
        this.maintenance = maintenance;
        this.mileage = mileage;
        this.datePerformed = datePerformed;
    }
}

// Define Menu class
class Menu {
    constructor() {
        this.vehicles = [];
        this.selectedVehicle = null;
    }
    initialize() {
        let selection = this.showVehicleMenuOptions().toUpperCase();
        while (selection != 'X') {
            switch (selection) {
                case 'A':
                    this.addVehicle();
                    break;
                case 'V':
                    this.viewVehice();
                    break;
                case 'D':
                    this.deleteVehicle();
                    break;
                case 'L':
                    this.listVehicles();
                    break;
                case 'X':
                    alert("Exiting menu - So long!");
                    break;
                default:
                    alert("Enter A-add,V-view,D-delete,L-list,X-exit");
            }
            selection = this.showVehicleMenuOptions().toUpperCase();
        }
    }
    showVehicleMenuOptions() {
        return prompt(`
          A) Add vehicle
          V) View vehicle
          D) Delete vehicle
          L) List all vehicles
          X) Exit
        `);
    }
    addVehicle() {
        let make = prompt('Enter Make:');
        let model = prompt('Enter Model:');
        let year = prompt('Enter Year:')
        this.vehicles.push(new Vehicle(make, model, year));
    }
    deleteVehicle() {
        let vehicleIndex = prompt('Enter Vehicle to delete');
        if (vehicleIndex > -1 && vehicleIndex < this.vehicles.length){
            this.vehicles.splice(vehicleIndex, 1);
        }
    }
    listVehicles() {
        let vehicleList = '';
        let vehicle = new Vehicle;
        for (vehicle of this.vehicles) {
            vehicleList += this.vehicles.indexOf(vehicle) + ') ' + vehicle.year + ' ' + vehicle.make + ' ' + vehicle.model + '\n';
        }
        alert(vehicleList);
    }
    viewVehice() {
        let vehicleIndex = prompt('Enter Vehicle index');
        if (vehicleIndex > -1 && vehicleIndex < this.vehicles.length) {
            this.selectedVehicle = this.vehicles[vehicleIndex];
            let selection = this.showMaintMenuOptions(this.selectedVehicle).toUpperCase();
            while (selection != 'X') {
                switch (selection) {
                    case 'A':
                        this.addMaintItem();
                        break;
                    case 'D':
                        this.deleteMaintItem();
                        break;
                    case 'X':
                        alert("Exiting menu - So long!");
                        break;
                    default:
                        alert("Enter A-add,D-delete,X-exit");
                }
                selection = this.showMaintMenuOptions(this.selectedVehicle).toUpperCase();
            }
        }
        else {
            alert(`vehicle ${vehicleIndex} not a valid vehicle index`);
        }
    }
    showMaintMenuOptions(vehicle = new Vehicle) {
        let maintList = 'List of maint Item \n-------------------------------------\n';
        let maintItem = new MaintItem;
        for (maintItem of vehicle.maintenanceItems){
            maintList += vehicle.maintenanceItems.indexOf(maintItem) + ") " + maintItem.maintenance + " at " + maintItem.mileage + " on " + maintItem.datePerformed + '\n';
        }
        return prompt(`
        ${vehicle.year} ${vehicle.make} ${vehicle.model} 
          A) Add Maintenance Item
          D) Delete Maintenance Item
          X) Exit
          -------------------------------------------------
          ${maintList}
        `);
    }
    addMaintItem() {
        let maintenance = prompt('Enter Maint Description:');
        let mileage = prompt('Enter mileage:');
        let datePerformed = prompt('Enter Date:');
        this.selectedVehicle.maintenanceItems.push(new MaintItem(maintenance, mileage, datePerformed));
    }
    deleteMaintItem() {
        let maintIndex = prompt('Enter Maint Item to delete');
        if (maintIndex > -1 && maintIndex < this.selectedVehicle.maintenanceItems.length){
            this.selectedVehicle.maintenanceItems.splice(maintIndex, 1);
        }
    }
}

// create new instance of menu class
let menu = new Menu;
// call initialize method
menu.initialize();