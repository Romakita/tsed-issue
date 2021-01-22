import { BodyParams, Controller, Get, Post } from "@tsed/common";
import { array, from, OneOf } from "@tsed/schema";

import { ParameterRequest, SetValueResponse } from "./../../../lib/model"

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello world";
  }

  @Post("/")
  post(
    @BodyParams()
    @OneOf(from(ParameterRequest), array().items(from(ParameterRequest)))
    payload: ParameterRequest | ParameterRequest[]): SetValueResponse {
      console.log(payload)
    return {} as any
  }

  @Post("/P2")
  postP2(
    @BodyParams()
    payload: ParameterRequest): SetValueResponse {
      console.log(payload)
    return {} as any
  }
}
