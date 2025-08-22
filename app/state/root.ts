import { makeAutoObservable } from "mobx";
import { News } from "./types";

export class RootStore {
  private loading_: boolean = false;
  private news_: News[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public get loading() {
    return this.loading_;
  }

  reset() {
    this.loading_ = false;
    this.news_ = [];
  }

  public get news() {
    return this.news_;
  }

  public loadNews() {
    this.loading_ = true;
    try {
      this.news_ = [];
    } finally {
      this.loading_ = false;
    }
  }
}
