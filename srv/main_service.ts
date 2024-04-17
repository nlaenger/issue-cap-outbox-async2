import * as cds from "@sap/cds";
import { ApplicationService, Request, ServiceImpl } from "@sap/cds";
import { CSN } from "@cap-js/cds-types/apis/csn";
import { NextFunction } from "express";
import {
  Arbeitsschritte_,
  Belege_,
  Positionen_,
} from "#cds-models/main_service";
import { TestEvent1 } from "#cds-models/event_service";

class MyServiceClass extends ApplicationService {
  messaging: cds.MessagingService;
  event_service: cds.ApplicationService;

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
    this.event_service = await cds.connect.to("event_service");

    cds.on("served", async () => {
      debugger;
      const belege: Belege_ = await SELECT.from(Belege_);
      belege.forEach((beleg) => {
        cds.log("TEST").info(beleg.ID);
      });

      setTimeout(async () => {
        await this.test1();
        await this.test3();
        await this.test2();
      }, 100);
    });

    this.on("Test1", async (req, next) => {
      await this.test1();
      return next();
    });

    this.on("Test2", async (req, next) => {
      await this.test2();
      return next();
    });

    this.on("Test3", async (req, next) => {
      await this.test3();
      return next();
    });

    return await super.init();
  }

  async test1() {
    console.log("------------------------------------------------------------");
    cds.log("TEST").info("Start of Test 1");
    const start = new Date();
    cds
      .log("TEST")
      .info("Start emit of event", "TestEvent1", start.toISOString());
    const result = await this.event_service.emit("TestEvent1", {
      ID: cds.utils.uuid(),
      name: "Test1",
    } as TestEvent1);
    const end = new Date();
    cds.log("TEST").info("End emit of event", end.toISOString(), result);
    console.log("------------------------------------------------------------");
    return `Runtime: ${end.valueOf() - start.valueOf()}`;
  }

  async test2() {
    console.log("------------------------------------------------------------");
    //@ts-expect-error: some days...
    const outbox = cds.outboxed(this.event_service);
    cds.log("TEST").info("Start of Test 2");
    const start = new Date();
    cds
      .log("TEST")
      .info("Start emit of event", "TestEvent2", start.toISOString());
    const result = await outbox.emit("TestEvent2", {
      ID: cds.utils.uuid(),
      name: "Test2",
    } as TestEvent1);
    const end = new Date();
    cds.log("TEST").info("End emit of event", end.toISOString(), result);
    console.log("------------------------------------------------------------");
    return `Runtime: ${end.valueOf() - start.valueOf()}`;
  }

  async test3() {
    console.log("------------------------------------------------------------");
    //@ts-expect-error: some days...
    const unbox = cds.unboxed(this.event_service);
    cds.log("TEST").info("Start of Test 3");
    const start = new Date();
    cds
      .log("TEST")
      .info("Start emit of event", "TestEvent3", start.toISOString());
    const result = await unbox.emit("TestEvent3", {
      ID: cds.utils.uuid(),
      name: "Test3",
    } as TestEvent1);
    const end = new Date();
    cds.log("TEST").info("End emit of event", end.toISOString(), result);
    console.log("------------------------------------------------------------");
    return `Runtime: ${end.valueOf() - start.valueOf()}`;
  }
}

export { MyServiceClass as main_service }; //Export name muss! wie der cds Service lauten!

// export default (srv: Service) => {
//   srv.on("CREATE", "A", (req, next) => {});
//   srv.on("READ", "B", async (req, next) => {});
// };
