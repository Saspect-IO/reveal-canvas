import { ProgramEntrySettings } from "@/modules";


export default class CVContext {

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvasId: string) {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement
        this.ctx = canvas.getContext(ProgramEntrySettings.CANVAS_CONTEXT) as CanvasRenderingContext2D
        this.canvas = canvas
    }

    setColor() {
        this.ctx.globalAlpha = ProgramEntrySettings.GLOBAL_ALPHA;
        this.ctx.fillStyle = ProgramEntrySettings.CANVAS_FILL_STYLE;
        return this
    }

    setSize() {
        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height,
        );
        return this
    }

    fitScreen() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        return this
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return this
    }

    getContext() {
        return this.ctx
    }
}