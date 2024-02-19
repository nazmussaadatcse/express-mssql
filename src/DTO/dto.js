// UserDTO.js
export class UserDTO {
    constructor(userData) {
        this.name = userData.name;
        this.email = userData.email;
        this.status = userData.status;
        this.role = userData.role;
    }
}
