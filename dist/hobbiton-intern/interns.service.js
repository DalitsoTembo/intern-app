"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternService = void 0;
const common_1 = require("@nestjs/common");
let InternService = class InternService {
    constructor() {
        this.interns = [];
    }
    addIntern(intern) {
        this.interns.push(intern);
        return intern;
    }
    getInterns() {
        return this.interns;
    }
    getIntern(email) {
        const index = this.findIntern(email);
        return this.interns[index];
    }
    updateIntern(internEmail, intern) {
        const index = this.findIntern(internEmail);
        if (index >= 0) {
            const updatedIntern = Object.assign(Object.assign({}, this.interns[index]), intern);
            this.interns[index] = updatedIntern;
        }
    }
    removeIntern(email) {
        const index = this.findIntern(email);
        this.interns.splice(index, 1);
    }
    findIntern(email) {
        const index = this.interns.findIndex(intern => intern.email === email);
        return index;
    }
};
InternService = __decorate([
    (0, common_1.Injectable)()
], InternService);
exports.InternService = InternService;
//# sourceMappingURL=interns.service.js.map