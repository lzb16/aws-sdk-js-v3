import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateUserStatusRequest } from "../models/models_1";
import {
  deserializeAws_queryUpdateUserStatusCommand,
  serializeAws_queryUpdateUserStatusCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateUserStatusCommandInput = UpdateUserStatusRequest;
export type UpdateUserStatusCommandOutput = __MetadataBearer;

/**
 * <p>Updates the name and/or the path of the specified IAM user.</p>
 *          <important>
 *             <p> You should understand the implications of changing an IAM user's path or name. For
 *             more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM
 *                User</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM Group</a> in
 *             the <i>IAM User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p> To change a user name, the requester must have appropriate permissions on both the
 *             source object and the target object. For example, to change Bob to Robert, the entity
 *             making the request must have permission on Bob and Robert, or must have permission on
 *             all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and Policies</a>.
 *          </p>
 *          </note>
 */
export class UpdateUserStatusCommand extends $Command<
  UpdateUserStatusCommandInput,
  UpdateUserStatusCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserStatusCommandInput, UpdateUserStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateUserStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateUserStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserStatusCommandOutput> {
    return deserializeAws_queryUpdateUserStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
