import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutRolePolicyRequest } from "../models/models_1";
import {
  deserializeAws_queryPutRolePolicyCommand,
  serializeAws_queryPutRolePolicyCommand,
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

export type PutRolePolicyCommandInput = PutRolePolicyRequest;
export type PutRolePolicyCommandOutput = __MetadataBearer;

/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *          role.</p>
 *          <p>When you embed an inline policy in a role, the inline policy is used as part of the
 *          role's access (permissions) policy. The role's trust policy is created at the same time as
 *          the role, using <a>CreateRole</a>. You can update a role's trust policy using
 *             <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, go to
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to
 *             Delegate Permissions and Federate Identities</a>.</p>
 *          <p>A role can also have a managed policy attached to it. To attach a managed policy to a
 *          role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *             Policies and Inline Policies</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>For information about limits on the number of inline policies that you can embed with a
 *          role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *             calling <code>PutRolePolicy</code>. For general information about using the Query API
 *             with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
 *                <i>IAM User Guide</i>.</p>
 *          </note>
 */
export class PutRolePolicyCommand extends $Command<
  PutRolePolicyCommandInput,
  PutRolePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRolePolicyCommandInput) {
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
  ): Handler<PutRolePolicyCommandInput, PutRolePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "PutRolePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRolePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutRolePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRolePolicyCommandOutput> {
    return deserializeAws_queryPutRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
