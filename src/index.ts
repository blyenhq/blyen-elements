import Blyen from './elements';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('blyen-profile');
    buttons.forEach((button) => new Blyen(button as HTMLButtonElement));
});