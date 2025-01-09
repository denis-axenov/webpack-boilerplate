import Module from "@/scripts/module";

document.addEventListener("DOMContentLoaded", () => {

    new Module({
        param1: 1,
        param2: 2
    });

    document.querySelector('.page-content_title')?.classList.add('page-content_title-visible');
});