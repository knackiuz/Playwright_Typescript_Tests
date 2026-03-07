import { expect, Locator, Page } from "@playwright/test";


export class ResizablePage{
    readonly page: Page;
    readonly resizableBoxWithRestriction: Locator;
    readonly resizableBoxHandle: Locator;

    constructor(page: Page){
        this.page = page;
        this.resizableBoxWithRestriction = page.locator('#resizableBoxWithRestriction');
        this.resizableBoxHandle = this.resizableBoxWithRestriction.locator('span.react-resizable-handle');
    }

    async resizeBox(width: number, height: number): Promise<ResizablePage>{
        console.log(`[INFO]: Resizing box to: ${width}x${height}`);
        const box = await this.resizableBoxHandle.boundingBox();

        if (!box) {
            throw new Error("Could not find bounding box for resizable handle!");
        }

        const centerX = box.x + box.width / 2;
        const centerY = box.y + box.height / 2;

        await this.page.mouse.move(centerX, centerY);
        await this.page.mouse.down();
        await this.page.mouse.move(box.x + width, box.y + height);
        await this.page.mouse.up();

        return this;
    }

    async verifyResizableBoxSize(expectedWidth: number, expectedHeight: number): Promise<ResizablePage>{
        const style = await this.resizableBoxWithRestriction.getAttribute('style');
        await expect(this.resizableBoxWithRestriction).toHaveAttribute('style', `width: ${expectedWidth}px; height: ${expectedHeight}px;`);
        console.log(`[INFO]: Size successfully verified: ${expectedWidth}x${expectedHeight}`);
        return this;
    }
}