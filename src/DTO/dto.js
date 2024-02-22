// UserDTO.js
export class UserDTO {
    constructor(userData) {
        this.name = userData.name;
        this.email = userData.email;
        this.status = userData.status;
        this.role = userData.role;
    }
}
// single lunch DTO 
export class SingleLunchDTO {
    constructor(SingleLunchData) {
        this.name = SingleLunchData.name;
        this.note = SingleLunchData.note;
        this.email = SingleLunchData.email;
        this.bookBy = SingleLunchData.bookBy;
        this.type = SingleLunchData.type;
        this.lunchQuantity = SingleLunchData.lunchQuantity;
    }
}
