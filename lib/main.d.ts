// Type definitions for @kapok/scene 
// Project: [~THE PROJECT NAME~]
// Definitions by: Zero <[~A URL FOR YOU~]>

export as namespace Scene;

export = Scene;

/**
 * Canvas 动画场景
 * @class Scene
 */
declare class Scene {

  constructor(options: Scene.OptionsWithCanvas | Scene.OptionsWithContainerId | Scene.OptionsWithId)
  
  /**
   * 绑定事件
   */
  addEventListener: HTMLElement["addEventListener"]

  /**
   * mouse X坐标
   */
  mouseX: Number

  /**
   * mouse Y坐标
   */
  mouseY: Number

  /**
   * 帧数
   */
  frameCount: Number

  /**
   * 是否自动循环
   * @private
   */
  private _canLoop: Boolean

  /**
   * 帧数
   * @private
   */
  private _frameCount: Boolean

  /**
   * mouse X坐标
   * @private
   */
  private _mouseX: Number

  /**
   * mouse Y坐标
   * @private
   */
  private _mouseY: Number

  /**
   * 开始循环绘制
   */
  start(): void

  /**
   * 初始化(ctx初始化设置)
   * @param ctx {CanvasRenderingContext2D}
   */
  setup(ctx: CanvasRenderingContext2D): void

  /**
   * 循环绘制
   * @param ctx {CanvasRenderingContext2D}
   */
  loop(ctx: CanvasRenderingContext2D): void

  /**
   * 停止循环
   */
  loopStop(): void

  /**
   * 开始循环
   */
  loopStart(): void

  /**
   * 清除画板
   */
  clear(): void

  /**
   * 绘制步骤
   */
  private _run(): void
}

declare namespace Scene {
  interface commonOptions {
    traceMouse?: Boolean
  }

  export interface OptionsWithContainerId extends commonOptions {
    containerId: String
    width?: Number
    height?: Number
  }

  export interface OptionsWithId extends commonOptions {
    id: String
  }

  export interface OptionsWithCanvas extends commonOptions {
    canvas: HTMLCanvasElement
  }
}