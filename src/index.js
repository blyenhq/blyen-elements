"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const elements_1 = __importDefault(require("./elements"));
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('blyen-profile');
    buttons.forEach((button) => new elements_1.default(button));
});
