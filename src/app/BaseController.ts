import { Response } from "express";
import { InputValidationResult } from "@/presentation/contracts/InputValidator";
import { EntityNotFoundError } from "@/core/errors";

export abstract class BaseController {
  public sendJson<T>(response: Response, data: T, code: number = 200): Response {
    if (typeof data === "string") {
      return response.status(code).json({ message: data });
    }

    return response.status(code).json(data);
  }

  public sendErrorJson(response: Response, error: any, code: number = 400): Response {
    if (error instanceof EntityNotFoundError) return this.sendNotFoundError(response, error);
    if (error instanceof Error && error.cause !== "Application handled error") {
      return this.sendInternalServerError(response, error);
    }
    const message = error?.details ?? error?.message ?? error ?? "Unexpected Error";

    return response.status(code).json({ message });
  }

  public sendInternalServerError(response: Response, error?: any): Response {
    const responseData: any = {
      message: "Internal Server Error"
    };

    return response.status(500).json(responseData);
  }

  public sendBadRequest(response: Response, failedValidationResult: InputValidationResult): Response {
    if (!failedValidationResult.message) {
      failedValidationResult.message = "Bad request";
    }

    return response.status(400).json(failedValidationResult);
  }

  public sendNotFoundError(response: Response, error?: any): Response {
    const responseData: any = {};

    return response.status(404).json(responseData);
  }
}
