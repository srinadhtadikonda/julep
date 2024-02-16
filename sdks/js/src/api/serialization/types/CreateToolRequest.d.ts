/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const CreateToolRequest: core.serialization.ObjectSchema<
  serializers.CreateToolRequest.Raw,
  JulepApi.CreateToolRequest
>;
export declare namespace CreateToolRequest {
  interface Raw {
    type: serializers.CreateToolRequestType.Raw;
    function: serializers.FunctionDef.Raw;
  }
}