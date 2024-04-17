import * as cds from "@sap/cds";
import { ApplicationService, Request, ServiceImpl } from "@sap/cds";
import { CSN } from "@cap-js/cds-types/apis/csn";
import { NextFunction } from "express";
import {
  Arbeitsschritte_,
  Belege_,
  Positionen_,
} from "#cds-models/main_service";

class MyServiceClass extends ApplicationService {
  messaging: cds.MessagingService;

  constructor(
    name?: string,
    model?: CSN,
    options?: {
      kind: string;
      impl: string | ServiceImpl;
    }
  ) {
    super(name, model, options);
    return this;
  }

  override async init() {
    this.messaging = await cds.connect.to("messaging");

    this.on("*", "*", async (req: Request, next: NextFunction) => {
      cds.log("Event Service").info("starting on:", new Date().toISOString());
      cds.log("Event Service").info("DATA", req.data);
      cds.log("Event Service").info("waiting for", 1000, "ms");
      await sleep(1000);
      cds.log("Event Service").info("done waiting  for", 1000, "ms");

      const xxx = await next(req);
      cds.log("Event Service").info("ending on:", new Date().toISOString());
      return xxx;
    });

    return await super.init();
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export { MyServiceClass as event_service }; //Export name muss! wie der cds Service lauten!
