import {
  AccessKey,
  AccountType,
  AssignmentStatusType,
  PolicyOwnerEntityType,
  PolicyType,
  PolicyVersion,
  Role,
  SSHPublicKey,
  ServerCertificateMetadata,
  ServiceSpecificCredential,
  StatusType,
  Tag,
  User,
  UserStatusType,
  VirtualMFADevice,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
 */
export interface PolicyGrantingServiceAccess {
  /**
   * <p>The policy name.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy type. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed
   *             Policies and Inline Policies</a> in the
   *          <i>IAM User Guide</i>.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  PolicyArn?: string;

  /**
   * <p>The type of entity (user or role) that used the policy to access the service to which
   *          the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityType?: PolicyOwnerEntityType | string;

  /**
   * <p>The name of the entity (user or role) to which the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityName?: string;
}

export namespace PolicyGrantingServiceAccess {
  export const filterSensitiveLog = (obj: PolicyGrantingServiceAccess): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
 */
export interface ListPoliciesGrantingServiceAccessEntry {
  /**
   * <p>The namespace of the service that was accessed.</p>
   *          <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace?: string;

  /**
   * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the
   *          policy.</p>
   */
  Policies?: PolicyGrantingServiceAccess[];
}

export namespace ListPoliciesGrantingServiceAccessEntry {
  export const filterSensitiveLog = (obj: ListPoliciesGrantingServiceAccessEntry): any => ({
    ...obj,
  });
}

export interface ListPoliciesGrantingServiceAccessResponse {
  /**
   * <p>A <code>ListPoliciesGrantingServiceAccess</code> object that contains details about the
   *          permissions policies attached to the specified identity (user, group, or role).</p>
   */
  PoliciesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were
   *          truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *          request parameter to retrieve more items. We recommend that you check
   *             <code>IsTruncated</code> after every call to ensure that you receive all your
   *          results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListPoliciesGrantingServiceAccessResponse {
  export const filterSensitiveLog = (obj: ListPoliciesGrantingServiceAccessResponse): any => ({
    ...obj,
  });
}

export interface ListPolicyVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the
   *          versions.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListPolicyVersionsRequest {
  export const filterSensitiveLog = (obj: ListPolicyVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListPolicyVersions</a> request.
 *     </p>
 */
export interface ListPolicyVersionsResponse {
  /**
   * <p>A list of policy versions.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  Versions?: PolicyVersion[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListPolicyVersionsResponse {
  export const filterSensitiveLog = (obj: ListPolicyVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListRolePoliciesRequest {
  /**
   * <p>The name of the role to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListRolePoliciesRequest {
  export const filterSensitiveLog = (obj: ListRolePoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListRolePolicies</a> request.
 *     </p>
 */
export interface ListRolePoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListRolePoliciesResponse {
  export const filterSensitiveLog = (obj: ListRolePoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListRolesRequest {
  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *             <code>/application_abc/component_xyz/</code> gets all roles whose path starts with
   *             <code>/application_abc/component_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all roles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListRolesRequest {
  export const filterSensitiveLog = (obj: ListRolesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListRoles</a> request. </p>
 */
export interface ListRolesResponse {
  /**
   * <p>A list of roles.</p>
   */
  Roles: Role[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListRolesResponse {
  export const filterSensitiveLog = (obj: ListRolesResponse): any => ({
    ...obj,
  });
}

export interface ListRoleTagsRequest {
  /**
   * <p>The name of the IAM role for which you want to see the list of tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) Use this only when paginating results to indicate the
   *     maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, it defaults to 100. Note that
   *     IAM might return fewer results, even when more results are available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListRoleTagsRequest {
  export const filterSensitiveLog = (obj: ListRoleTagsRequest): any => ({
    ...obj,
  });
}

export interface ListRoleTagsResponse {
  /**
   * <p>The list of tags currently that is attached to the role. Each tag consists of a key
   *       name and an associated value. If no tags are attached to the specified role, the response
   *       contains an empty list.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can use the <code>Marker</code> request parameter to make a subsequent pagination request that retrieves more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when more results are available. Check <code>IsTruncated</code> after every call to ensure that you receive all of your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListRoleTagsResponse {
  export const filterSensitiveLog = (obj: ListRoleTagsResponse): any => ({
    ...obj,
  });
}

export interface ListSAMLProvidersRequest {}

export namespace ListSAMLProvidersRequest {
  export const filterSensitiveLog = (obj: ListSAMLProvidersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the list of SAML providers for this account.</p>
 */
export interface SAMLProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider.</p>
   */
  Arn?: string;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;
}

export namespace SAMLProviderListEntry {
  export const filterSensitiveLog = (obj: SAMLProviderListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListSAMLProviders</a> request.
 *     </p>
 */
export interface ListSAMLProvidersResponse {
  /**
   * <p>The list of SAML provider resource objects defined in IAM for this AWS
   *          account.</p>
   */
  SAMLProviderList?: SAMLProviderListEntry[];
}

export namespace ListSAMLProvidersResponse {
  export const filterSensitiveLog = (obj: ListSAMLProvidersResponse): any => ({
    ...obj,
  });
}

export interface ListServerCertificatesRequest {
  /**
   * <p> The path prefix for filtering the results. For example:
   *             <code>/company/servercerts</code> would get all server certificates for which the path
   *          starts with <code>/company/servercerts</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all server certificates. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListServerCertificatesRequest {
  export const filterSensitiveLog = (obj: ListServerCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListServerCertificates</a> request.
 *     </p>
 */
export interface ListServerCertificatesResponse {
  /**
   * <p>A list of server certificates.</p>
   */
  ServerCertificateMetadataList: ServerCertificateMetadata[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListServerCertificatesResponse {
  export const filterSensitiveLog = (obj: ListServerCertificatesResponse): any => ({
    ...obj,
  });
}

export interface ListServiceSpecificCredentialsRequest {
  /**
   * <p>The name of the user whose service-specific credentials you want information about. If
   *          this value is not specified, then the operation assumes the user whose credentials are used
   *          to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Filters the returned results to only those for the specified AWS service. If not
   *          specified, then AWS returns service-specific credentials for all services.</p>
   */
  ServiceName?: string;
}

export namespace ListServiceSpecificCredentialsRequest {
  export const filterSensitiveLog = (obj: ListServiceSpecificCredentialsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains additional details about a service-specific credential.</p>
 */
export interface ServiceSpecificCredentialMetadata {
  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The generated user name for the service-specific credential.</p>
   */
  ServiceUserName: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   */
  ServiceName: string | undefined;
}

export namespace ServiceSpecificCredentialMetadata {
  export const filterSensitiveLog = (obj: ServiceSpecificCredentialMetadata): any => ({
    ...obj,
  });
}

export interface ListServiceSpecificCredentialsResponse {
  /**
   * <p>A list of structures that each contain details about a service-specific
   *          credential.</p>
   */
  ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[];
}

export namespace ListServiceSpecificCredentialsResponse {
  export const filterSensitiveLog = (obj: ListServiceSpecificCredentialsResponse): any => ({
    ...obj,
  });
}

export interface ListSigningCertificatesRequest {
  /**
   * <p>The name of the IAM user whose signing certificates you want to examine.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListSigningCertificatesRequest {
  export const filterSensitiveLog = (obj: ListSigningCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an X.509 signing certificate.</p>
 *          <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a>
 *          operations. </p>
 */
export interface SigningCertificate {
  /**
   * <p>The name of the user the signing certificate is associated with.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the signing certificate.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p>The contents of the signing certificate.</p>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The status of the signing certificate. <code>Active</code> means that the key is valid
   *          for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date when the signing certificate was uploaded.</p>
   */
  UploadDate?: Date;
}

export namespace SigningCertificate {
  export const filterSensitiveLog = (obj: SigningCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListSigningCertificates</a>
 *       request. </p>
 */
export interface ListSigningCertificatesResponse {
  /**
   * <p>A list of the user's signing certificate information.</p>
   */
  Certificates: SigningCertificate[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListSigningCertificatesResponse {
  export const filterSensitiveLog = (obj: ListSigningCertificatesResponse): any => ({
    ...obj,
  });
}

export interface ListSSHPublicKeysRequest {
  /**
   * <p>The name of the IAM user to list SSH public keys for. If none is specified, the
   *             <code>UserName</code> field is determined implicitly based on the AWS access key used
   *          to sign the request.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListSSHPublicKeysRequest {
  export const filterSensitiveLog = (obj: ListSSHPublicKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an SSH public key, without the key's body or
 *          fingerprint.</p>
 *          <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a>
 *          operation.</p>
 */
export interface SSHPublicKeyMetadata {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key
   *          cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate: Date | undefined;
}

export namespace SSHPublicKeyMetadata {
  export const filterSensitiveLog = (obj: SSHPublicKeyMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListSSHPublicKeys</a>
 *       request.</p>
 */
export interface ListSSHPublicKeysResponse {
  /**
   * <p>A list of the SSH public keys assigned to IAM user.</p>
   */
  SSHPublicKeys?: SSHPublicKeyMetadata[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListSSHPublicKeysResponse {
  export const filterSensitiveLog = (obj: ListSSHPublicKeysResponse): any => ({
    ...obj,
  });
}

export interface ListUserAccessKeysRequest {
  /**
   * <p>The name of the IAM user that the new key will belong to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>1 means need, 0 means no need.</p>
   */
  NeedInnerCert?: number;
}

export namespace ListUserAccessKeysRequest {
  export const filterSensitiveLog = (obj: ListUserAccessKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateAccessKey</a> request.
 *     </p>
 */
export interface ListUserAccessKeysResponse {
  /**
   * <p>The access keys of account.</p>
   */
  AccessKeys?: AccessKey[];
}

export namespace ListUserAccessKeysResponse {
  export const filterSensitiveLog = (obj: ListUserAccessKeysResponse): any => ({
    ...obj,
    ...(obj.AccessKeys && { AccessKeys: obj.AccessKeys.map((item) => AccessKey.filterSensitiveLog(item)) }),
  });
}

export interface ListUserPoliciesRequest {
  /**
   * <p>The name of the user to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListUserPoliciesRequest {
  export const filterSensitiveLog = (obj: ListUserPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListUserPolicies</a> request.
 *     </p>
 */
export interface ListUserPoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListUserPoliciesResponse {
  export const filterSensitiveLog = (obj: ListUserPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
  /**
   * <p> The path prefix for filtering the results. For example:
   *             <code>/division_abc/subdivision_xyz/</code>, which would get all user names whose path
   *          starts with <code>/division_abc/subdivision_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all user names. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>1 means need, 0 means no need.</p>
   */
  NeedInnerCert?: number;

  /**
   * <p>1 means need, 0 means no need.</p>
   */
  NeedAddedGroups?: number;

  /**
   * <p>1 means need, 0 means no need.</p>
   */
  NeedAttachedPolicies?: number;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListUsers</a> request. </p>
 */
export interface ListUsersResponse {
  /**
   * <p>The account to create.</p>
   */
  Account: AccountType | undefined;

  /**
   * <p>A list of users.</p>
   */
  Users: User[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
    ...(obj.Account && { Account: AccountType.filterSensitiveLog(obj.Account) }),
  });
}

export interface ListUserTagsRequest {
  /**
   * <p>The name of the IAM user whose tags you want to see.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) Use this only when paginating results to indicate the
   *     maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, it defaults to 100. Note that
   *     IAM might return fewer results, even when more results are available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListUserTagsRequest {
  export const filterSensitiveLog = (obj: ListUserTagsRequest): any => ({
    ...obj,
  });
}

export interface ListUserTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the user. Each tag consists of a key
   *       name and an associated value. If no tags are attached to the specified user, the response
   *       contains an empty list.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can use the <code>Marker</code> request parameter to make a subsequent pagination request that retrieves more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when more results are available. Check <code>IsTruncated</code> after every call to ensure that you receive all of your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListUserTagsResponse {
  export const filterSensitiveLog = (obj: ListUserTagsResponse): any => ({
    ...obj,
  });
}

export interface ListVirtualMFADevicesRequest {
  /**
   * <p> The status (<code>Unassigned</code> or <code>Assigned</code>) of the devices to list.
   *          If you do not specify an <code>AssignmentStatus</code>, the operation defaults to
   *             <code>Any</code>, which lists both assigned and unassigned virtual MFA devices.,</p>
   */
  AssignmentStatus?: AssignmentStatusType | string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListVirtualMFADevicesRequest {
  export const filterSensitiveLog = (obj: ListVirtualMFADevicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListVirtualMFADevices</a> request.
 *     </p>
 */
export interface ListVirtualMFADevicesResponse {
  /**
   * <p> The list of virtual MFA devices in the current account that match the
   *             <code>AssignmentStatus</code> value that was passed in the request.</p>
   */
  VirtualMFADevices: VirtualMFADevice[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   *          the value to use for the <code>Marker</code> parameter in a subsequent pagination
   *          request.</p>
   */
  Marker?: string;
}

export namespace ListVirtualMFADevicesResponse {
  export const filterSensitiveLog = (obj: ListVirtualMFADevicesResponse): any => ({
    ...obj,
    ...(obj.VirtualMFADevices && {
      VirtualMFADevices: obj.VirtualMFADevices.map((item) => VirtualMFADevice.filterSensitiveLog(item)),
    }),
  });
}

export interface LoginConsoleRequest {
  /**
   * <p>1 means account; 2 means user; 3 means email</p>
   */
  LoginType: number | undefined;

  /**
   * <p>Account name, required when LoginType is 1.</p>
   */
  AccountName?: string;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  UserName?: string;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  Email?: string;

  /**
   * <p>Password</p>
   */
  Password: string | undefined;
}

export namespace LoginConsoleRequest {
  export const filterSensitiveLog = (obj: LoginConsoleRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface LoginConsoleResponse {
  /**
   * <p>Login succeed or failed.</p>
   */
  Result: string | undefined;

  /**
   * <p>0 means no need update, 1 means need update.</p>
   */
  NeedUpdatePassword?: number;

  /**
   * <p>Account info.</p>
   */
  Account?: AccountType;

  /**
   * <p>AccessKey info.</p>
   */
  AccessKey?: AccessKey;
}

export namespace LoginConsoleResponse {
  export const filterSensitiveLog = (obj: LoginConsoleResponse): any => ({
    ...obj,
    ...(obj.Account && { Account: AccountType.filterSensitiveLog(obj.Account) }),
    ...(obj.AccessKey && { AccessKey: AccessKey.filterSensitiveLog(obj.AccessKey) }),
  });
}

export interface PutGroupPolicyRequest {
  /**
   * <p>The name of the group to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace PutGroupPolicyRequest {
  export const filterSensitiveLog = (obj: PutGroupPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutRolePermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM role for which you want to set the
   *          permissions boundary.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the role.</p>
   */
  PermissionsBoundary: string | undefined;
}

export namespace PutRolePermissionsBoundaryRequest {
  export const filterSensitiveLog = (obj: PutRolePermissionsBoundaryRequest): any => ({
    ...obj,
  });
}

export interface PutRolePolicyRequest {
  /**
   * <p>The name of the role to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace PutRolePolicyRequest {
  export const filterSensitiveLog = (obj: PutRolePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutUserPermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user for which you want to set the
   *          permissions boundary.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the user.</p>
   */
  PermissionsBoundary: string | undefined;
}

export namespace PutUserPermissionsBoundaryRequest {
  export const filterSensitiveLog = (obj: PutUserPermissionsBoundaryRequest): any => ({
    ...obj,
  });
}

export interface PutUserPolicyRequest {
  /**
   * <p>The name of the user to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace PutUserPolicyRequest {
  export const filterSensitiveLog = (obj: PutUserPolicyRequest): any => ({
    ...obj,
  });
}

export interface RemoveAccountFromGroupRequest {
  /**
   * <p>Account group name.</p>
   */
  GroupName?: string;

  /**
   * <p>Account name.</p>
   */
  AccountName?: string;
}

export namespace RemoveAccountFromGroupRequest {
  export const filterSensitiveLog = (obj: RemoveAccountFromGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the client
   *          ID from. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>The client ID (also known as audience) to remove from the IAM OIDC provider resource.
   *          For more information about client IDs, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  ClientID: string | undefined;
}

export namespace RemoveClientIDFromOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (obj: RemoveClientIDFromOpenIDConnectProviderRequest): any => ({
    ...obj,
  });
}

export interface RemoveRoleFromInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The name of the role to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace RemoveRoleFromInstanceProfileRequest {
  export const filterSensitiveLog = (obj: RemoveRoleFromInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface RemoveUserFromGroupRequest {
  /**
   * <p>The name of the group to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace RemoveUserFromGroupRequest {
  export const filterSensitiveLog = (obj: RemoveUserFromGroupRequest): any => ({
    ...obj,
  });
}

export interface ResetAccountPasswordRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName: string | undefined;

  /**
   * <p>The new password.</p>
   */
  NewPassword?: string;

  /**
   * <p>First login is update password, 0 means no, 1 means yes.</p>
   */
  FirstLoginUpdatePassword?: number;
}

export namespace ResetAccountPasswordRequest {
  export const filterSensitiveLog = (obj: ResetAccountPasswordRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

export interface ResetServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If this
   *          value is not specified, then the operation assumes the user whose credentials are used to
   *          call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;
}

export namespace ResetServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (obj: ResetServiceSpecificCredentialRequest): any => ({
    ...obj,
  });
}

export interface ResetServiceSpecificCredentialResponse {
  /**
   * <p>A structure with details about the updated service-specific credential, including the
   *          new password.</p>
   *          <important>
   *             <p>This is the <b>only</b> time that you can access the
   *             password. You cannot recover the password later, but you can reset it again.</p>
   *          </important>
   */
  ServiceSpecificCredential?: ServiceSpecificCredential;
}

export namespace ResetServiceSpecificCredentialResponse {
  export const filterSensitiveLog = (obj: ResetServiceSpecificCredentialResponse): any => ({
    ...obj,
    ...(obj.ServiceSpecificCredential && {
      ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(obj.ServiceSpecificCredential),
    }),
  });
}

export interface ResetUserPasswordRequest {
  /**
   * <p>User name.</p>
   */
  UserName?: string;

  /**
   * <p>The new password.</p>
   */
  NewPassword?: string;

  /**
   * <p>First login is update password, 0 means no, 1 means yes.</p>
   */
  FirstLoginUpdatePassword?: number;
}

export namespace ResetUserPasswordRequest {
  export const filterSensitiveLog = (obj: ResetUserPasswordRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

export interface ResyncMFADeviceRequest {
  /**
   * <p>The name of the user whose MFA device you want to resynchronize.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Serial number that uniquely identifies the MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>An authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   */
  AuthenticationCode1: string | undefined;

  /**
   * <p>A subsequent authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   */
  AuthenticationCode2: string | undefined;
}

export namespace ResyncMFADeviceRequest {
  export const filterSensitiveLog = (obj: ResyncMFADeviceRequest): any => ({
    ...obj,
  });
}

export interface SetDefaultPolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy whose default version you want to
   *          set.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The version of the policy to set as the default (operative) version.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  VersionId: string | undefined;
}

export namespace SetDefaultPolicyVersionRequest {
  export const filterSensitiveLog = (obj: SetDefaultPolicyVersionRequest): any => ({
    ...obj,
  });
}

export enum GlobalEndpointTokenVersion {
  v1Token = "v1Token",
  v2Token = "v2Token",
}

export interface SetSecurityTokenServicePreferencesRequest {
  /**
   * <p>The version of the global endpoint token. Version 1 tokens are valid only in AWS
   *          Regions that are available by default. These tokens do not work in manually enabled
   *          Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions.
   *          However, version 2 tokens are longer and might affect systems where you temporarily store
   *          tokens.</p>
   *          <p>For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating
   *             STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p>
   */
  GlobalEndpointTokenVersion: GlobalEndpointTokenVersion | string | undefined;
}

export namespace SetSecurityTokenServicePreferencesRequest {
  export const filterSensitiveLog = (obj: SetSecurityTokenServicePreferencesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed because a provided policy could not be successfully evaluated. An
 *       additional detailed message indicates the source of the failure.</p>
 */
export interface PolicyEvaluationException extends __SmithyException, $MetadataBearer {
  name: "PolicyEvaluationException";
  $fault: "server";
  message?: string;
}

export namespace PolicyEvaluationException {
  export const filterSensitiveLog = (obj: PolicyEvaluationException): any => ({
    ...obj,
  });
}

export enum ContextKeyTypeEnum {
  BINARY = "binary",
  BINARY_LIST = "binaryList",
  BOOLEAN = "boolean",
  BOOLEAN_LIST = "booleanList",
  DATE = "date",
  DATE_LIST = "dateList",
  IP = "ip",
  IP_LIST = "ipList",
  NUMERIC = "numeric",
  NUMERIC_LIST = "numericList",
  STRING = "string",
  STRING_LIST = "stringList",
}

/**
 * <p>Contains information about a condition context key. It includes the name of the key and
 *          specifies the value (or values, if the context key supports multiple values) to use in the
 *          simulation. This information is used when evaluating the <code>Condition</code> elements of
 *          the input policies.</p>
 *          <p>This data type is used as an input parameter to <a>SimulateCustomPolicy</a> and <a>SimulatePrincipalPolicy</a>.</p>
 */
export interface ContextEntry {
  /**
   * <p>The full name of a condition context key, including the service prefix. For example,
   *             <code>aws:SourceIp</code> or <code>s3:VersionId</code>.</p>
   */
  ContextKeyName?: string;

  /**
   * <p>The value (or values, if the condition context key supports multiple values) to provide
   *          to the simulation when the key is referenced by a <code>Condition</code> element in an
   *          input policy.</p>
   */
  ContextKeyValues?: string[];

  /**
   * <p>The data type of the value (or values) specified in the <code>ContextKeyValues</code>
   *          parameter.</p>
   */
  ContextKeyType?: ContextKeyTypeEnum | string;
}

export namespace ContextEntry {
  export const filterSensitiveLog = (obj: ContextEntry): any => ({
    ...obj,
  });
}

export interface SimulateCustomPolicyRequest {
  /**
   * <p>A list of policy documents to include in the simulation. Each document is specified as a
   *          string containing the complete, valid JSON text of an IAM policy. Do not include any
   *          resource-based policies in this parameter. Any resource-based policy must be submitted with
   *          the <code>ResourcePolicy</code> parameter. The policies cannot be "scope-down" policies,
   *          such as you could include in a call to <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetFederationToken.html">GetFederationToken</a> or one of the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AssumeRole.html">AssumeRole</a>
   *          API operations. In other words, do not use policies designed to restrict what a user can do
   *          while using the temporary credentials.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList: string[] | undefined;

  /**
   * <p>The IAM permissions boundary policy to simulate. The permissions boundary sets the
   *          maximum permissions that an IAM entity can have. You can input only one permissions
   *          boundary when you pass a policy to this operation. For more information about permissions
   *          boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Entities</a> in the <i>IAM User Guide</i>. The policy input is
   *          specified as a string that contains the complete, valid JSON text of a permissions boundary
   *          policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PermissionsBoundaryPolicyInputList?: string[];

  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *          evaluated against each resource. Each operation must include the service identifier, such
   *          as <code>iam:CreateUser</code>. This operation does not support using wildcards (*) in an
   *          action name.</p>
   */
  ActionNames: string[] | undefined;

  /**
   * <p>A list of ARNs of AWS resources to include in the simulation. If this parameter is not
   *          provided, then the value defaults to <code>*</code> (all resources). Each API in the
   *             <code>ActionNames</code> parameter is evaluated for each resource in this list. The
   *          simulation determines the access result (allowed or denied) of each combination and reports
   *          it in the response.</p>
   *          <p>The simulation does not automatically retrieve policies for the specified resources. If
   *          you want to include a resource policy in the simulation, then you must include the policy
   *          as a string in the <code>ResourcePolicy</code> parameter.</p>
   *          <p>If you include a <code>ResourcePolicy</code>, then it must be applicable to all of the
   *          resources included in the simulation or you receive an invalid input error.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ResourceArns?: string[];

  /**
   * <p>A resource-based policy to include in the simulation provided as a string. Each resource
   *          in the simulation is treated as if it had this policy attached. You can include only one
   *          resource-based policy in a simulation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  ResourcePolicy?: string;

  /**
   * <p>An ARN representing the AWS account ID that specifies the owner of any simulated
   *          resource that does not identify its owner in the resource ARN. Examples of resource ARNs
   *          include an S3 bucket or object. If <code>ResourceOwner</code> is specified, it is also used
   *          as the account owner of any <code>ResourcePolicy</code> included in the simulation. If the
   *             <code>ResourceOwner</code> parameter is not specified, then the owner of the resources
   *          and the resource policy defaults to the account of the identity provided in
   *             <code>CallerArn</code>. This parameter is required only if you specify a resource-based
   *          policy and account that owns the resource is different from the account that owns the
   *          simulated calling user <code>CallerArn</code>.</p>
   *          <p>The ARN for an account uses the following syntax:
   *                <code>arn:aws:iam::<i>AWS-account-ID</i>:root</code>. For example, to
   *          represent the account with the 112233445566 ID, use the following ARN:
   *             <code>arn:aws:iam::112233445566-ID:root</code>. </p>
   */
  ResourceOwner?: string;

  /**
   * <p>The ARN of the IAM user that you want to use as the simulated caller of the API
   *          operations. <code>CallerArn</code> is required if you include a <code>ResourcePolicy</code>
   *          so that the policy's <code>Principal</code> element has a value to use in evaluating the
   *          policy.</p>
   *          <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed
   *          role, federated user, or a service principal.</p>
   */
  CallerArn?: string;

  /**
   * <p>A list of context keys and corresponding values for the simulation to use. Whenever a
   *          context key is evaluated in one of the simulated IAM permissions policies, the
   *          corresponding value is supplied.</p>
   */
  ContextEntries?: ContextEntry[];

  /**
   * <p>Specifies the type of simulation to run. Different API operations that support
   *          resource-based policies require different combinations of resources. By specifying the type
   *          of simulation to run, you enable the policy simulator to enforce the presence of the
   *          required resources to ensure reliable simulation results. If your simulation does not match
   *          one of the following scenarios, then you can omit this parameter. The following list shows
   *          each of the supported scenario values and the resources that you must define to run the
   *          simulation.</p>
   *          <p>Each of the EC2 scenarios requires that you specify instance, image, and security-group
   *          resources. If your scenario includes an EBS volume, then you must specify that volume as a
   *          resource. If the EC2 scenario includes VPC, then you must supply the network-interface
   *          resource. If it includes an IP subnet, then you must specify the subnet resource. For more
   *          information on the EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>
   *          in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security-group</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-EBS</b>
   *                </p>
   *                <p>instance, image, security-group, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore-Subnet</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface, subnet</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS-Subnet</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface, subnet, volume</p>
   *             </li>
   *          </ul>
   */
  ResourceHandlingOption?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;
}

export namespace SimulateCustomPolicyRequest {
  export const filterSensitiveLog = (obj: SimulateCustomPolicyRequest): any => ({
    ...obj,
  });
}

export enum PolicyEvaluationDecisionType {
  ALLOWED = "allowed",
  EXPLICIT_DENY = "explicitDeny",
  IMPLICIT_DENY = "implicitDeny",
}

/**
 * <p>Contains the row and column of a location of a <code>Statement</code> element in a
 *          policy document.</p>
 *          <p>This data type is used as a member of the <code>
 *                <a>Statement</a>
 *             </code> type.</p>
 */
export interface Position {
  /**
   * <p>The line containing the specified position in the document.</p>
   */
  Line?: number;

  /**
   * <p>The column in the line containing the specified position in the document.</p>
   */
  Column?: number;
}

export namespace Position {
  export const filterSensitiveLog = (obj: Position): any => ({
    ...obj,
  });
}

export enum PolicySourceType {
  AWS_MANAGED = "aws-managed",
  GROUP = "group",
  NONE = "none",
  RESOURCE = "resource",
  ROLE = "role",
  USER = "user",
  USER_MANAGED = "user-managed",
}

/**
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that
 *          determines the result of the simulation.</p>
 *          <p>This data type is used by the <code>MatchedStatements</code> member of the <code>
 *                <a>EvaluationResult</a>
 *             </code> type.</p>
 */
export interface Statement {
  /**
   * <p>The identifier of the policy that was provided as an input.</p>
   */
  SourcePolicyId?: string;

  /**
   * <p>The type of the policy.</p>
   */
  SourcePolicyType?: PolicySourceType | string;

  /**
   * <p>The row and column of the beginning of the <code>Statement</code> in an IAM
   *          policy.</p>
   */
  StartPosition?: Position;

  /**
   * <p>The row and column of the end of a <code>Statement</code> in an IAM policy.</p>
   */
  EndPosition?: Position;
}

export namespace Statement {
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the effect that Organizations has on a policy simulation.</p>
 */
export interface OrganizationsDecisionDetail {
  /**
   * <p>Specifies whether the simulated operation is allowed by the Organizations service control
   *          policies that impact the simulated user's account.</p>
   */
  AllowedByOrganizations?: boolean;
}

export namespace OrganizationsDecisionDetail {
  export const filterSensitiveLog = (obj: OrganizationsDecisionDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the effect that a permissions boundary has on a policy
 *          simulation when the boundary is applied to an IAM entity.</p>
 */
export interface PermissionsBoundaryDecisionDetail {
  /**
   * <p>Specifies whether an action is allowed by a permissions boundary that is applied to an
   *          IAM entity (user or role). A value of <code>true</code> means that the permissions
   *          boundary does not deny the action. This means that the policy includes an
   *             <code>Allow</code> statement that matches the request. In this case, if an
   *          identity-based policy also allows the action, the request is allowed. A value of
   *             <code>false</code> means that either the requested action is not allowed (implicitly
   *          denied) or that the action is explicitly denied by the permissions boundary. In both of
   *          these cases, the action is not allowed, regardless of the identity-based policy.</p>
   */
  AllowedByPermissionsBoundary?: boolean;
}

export namespace PermissionsBoundaryDecisionDetail {
  export const filterSensitiveLog = (obj: PermissionsBoundaryDecisionDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of the simulation of a single API operation call on a single
 *          resource.</p>
 *          <p>This data type is used by a member of the <a>EvaluationResult</a> data
 *          type.</p>
 */
export interface ResourceSpecificResult {
  /**
   * <p>The name of the simulated resource, in Amazon Resource Name (ARN) format.</p>
   */
  EvalResourceName: string | undefined;

  /**
   * <p>The result of the simulation of the simulated API operation on the resource specified in
   *             <code>EvalResourceName</code>.</p>
   */
  EvalResourceDecision: PolicyEvaluationDecisionType | string | undefined;

  /**
   * <p>A list of the statements in the input policies that determine the result for this part
   *          of the simulation. Remember that even if multiple statements allow the operation on the
   *          resource, if <i>any</i> statement denies that operation, then the explicit
   *          deny overrides any allow. In addition, the deny statement is the only entry included in the
   *          result.</p>
   */
  MatchedStatements?: Statement[];

  /**
   * <p>A list of context keys that are required by the included input policies but that were
   *          not provided by one of the input parameters. This list is used when a list of ARNs is
   *          included in the <code>ResourceArns</code> parameter instead of "*". If you do not specify
   *          individual resources, by setting <code>ResourceArns</code> to "*" or by not including the
   *             <code>ResourceArns</code> parameter, then any missing context values are instead
   *          included under the <code>EvaluationResults</code> section. To discover the context keys
   *          used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or
   *             <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: string[];

  /**
   * <p>Additional details about the results of the evaluation decision on a single resource.
   *          This parameter is returned only for cross-account simulations. This parameter explains how
   *          each policy type contributes to the resource-specific evaluation decision.</p>
   */
  EvalDecisionDetails?: { [key: string]: PolicyEvaluationDecisionType | string };

  /**
   * <p>Contains information about the effect that a permissions boundary has on a policy
   *          simulation when that boundary is applied to an IAM entity.</p>
   */
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
}

export namespace ResourceSpecificResult {
  export const filterSensitiveLog = (obj: ResourceSpecificResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of a simulation.</p>
 *          <p>This data type is used by the return parameter of <code>
 *                <a>SimulateCustomPolicy</a>
 *             </code> and <code>
 *                <a>SimulatePrincipalPolicy</a>
 *             </code>.</p>
 */
export interface EvaluationResult {
  /**
   * <p>The name of the API operation tested on the indicated resource.</p>
   */
  EvalActionName: string | undefined;

  /**
   * <p>The ARN of the resource that the indicated API operation was tested on.</p>
   */
  EvalResourceName?: string;

  /**
   * <p>The result of the simulation.</p>
   */
  EvalDecision: PolicyEvaluationDecisionType | string | undefined;

  /**
   * <p>A list of the statements in the input policies that determine the result for this
   *          scenario. Remember that even if multiple statements allow the operation on the resource, if
   *          only one statement denies that operation, then the explicit deny overrides any allow. In
   *          addition, the deny statement is the only entry included in the result.</p>
   */
  MatchedStatements?: Statement[];

  /**
   * <p>A list of context keys that are required by the included input policies but that were
   *          not provided by one of the input parameters. This list is used when the resource in a
   *          simulation is "*", either explicitly, or when the <code>ResourceArns</code> parameter
   *          blank. If you include a list of resources, then any missing context values are instead
   *          included under the <code>ResourceSpecificResults</code> section. To discover the context
   *          keys used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: string[];

  /**
   * <p>A structure that details how Organizations and its service control policies affect the results of
   *          the simulation. Only applies if the simulated user's account is part of an
   *          organization.</p>
   */
  OrganizationsDecisionDetail?: OrganizationsDecisionDetail;

  /**
   * <p>Contains information about the effect that a permissions boundary has on a policy
   *          simulation when the boundary is applied to an IAM entity.</p>
   */
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;

  /**
   * <p>Additional details about the results of the cross-account evaluation decision. This
   *          parameter is populated for only cross-account simulations. It contains a brief summary of
   *          how each policy type contributes to the final evaluation decision.</p>
   *          <p>If the simulation evaluates policies within the same account and includes a resource
   *          ARN, then the parameter is present but the response is empty. If the simulation evaluates
   *          policies within the same account and specifies all resources (<code>*</code>), then the
   *          parameter is not returned.</p>
   *          <p>When you make a cross-account request, AWS evaluates the request in the trusting
   *          account and the trusted account. The request is allowed only if both evaluations return
   *             <code>true</code>. For more information about how policies are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies Within a Single Account</a>.</p>
   *          <p>If an AWS Organizations SCP included in the evaluation denies access, the simulation ends. In
   *          this case, policy evaluation does not proceed any further and this parameter is not
   *          returned.</p>
   */
  EvalDecisionDetails?: { [key: string]: PolicyEvaluationDecisionType | string };

  /**
   * <p>The individual results of the simulation of the API operation specified in
   *          EvalActionName on each resource.</p>
   */
  ResourceSpecificResults?: ResourceSpecificResult[];
}

export namespace EvaluationResult {
  export const filterSensitiveLog = (obj: EvaluationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>SimulatePrincipalPolicy</a> or
 *       <a>SimulateCustomPolicy</a> request.</p>
 */
export interface SimulatePolicyResponse {
  /**
   * <p>The results of the simulation.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace SimulatePolicyResponse {
  export const filterSensitiveLog = (obj: SimulatePolicyResponse): any => ({
    ...obj,
  });
}

export interface SimulatePrincipalPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a user, group, or role whose policies you want to
   *          include in the simulation. If you specify a user, group, or role, the simulation includes
   *          all policies that are associated with that entity. If you specify a user, the simulation
   *          also includes all policies that are attached to any groups the user belongs to.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicySourceArn: string | undefined;

  /**
   * <p>An optional list of additional policy documents to include in the simulation. Each
   *          document is specified as a string containing the complete, valid JSON text of an IAM
   *          policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList?: string[];

  /**
   * <p>The IAM permissions boundary policy to simulate. The permissions boundary sets the
   *          maximum permissions that the entity can have. You can input only one permissions boundary
   *          when you pass a policy to this operation. An IAM entity can only have one permissions
   *          boundary in effect at a time. For example, if a permissions boundary is attached to an
   *          entity and you pass in a different permissions boundary policy using this parameter, then
   *          the new permissions boundary policy is used for the simulation. For more information about
   *          permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Entities</a> in the <i>IAM User Guide</i>. The policy input is
   *          specified as a string containing the complete, valid JSON text of a permissions boundary
   *          policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PermissionsBoundaryPolicyInputList?: string[];

  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *          evaluated for each resource. Each operation must include the service identifier, such as
   *             <code>iam:CreateUser</code>.</p>
   */
  ActionNames: string[] | undefined;

  /**
   * <p>A list of ARNs of AWS resources to include in the simulation. If this parameter is not
   *          provided, then the value defaults to <code>*</code> (all resources). Each API in the
   *             <code>ActionNames</code> parameter is evaluated for each resource in this list. The
   *          simulation determines the access result (allowed or denied) of each combination and reports
   *          it in the response.</p>
   *          <p>The simulation does not automatically retrieve policies for the specified resources. If
   *          you want to include a resource policy in the simulation, then you must include the policy
   *          as a string in the <code>ResourcePolicy</code> parameter.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ResourceArns?: string[];

  /**
   * <p>A resource-based policy to include in the simulation provided as a string. Each resource
   *          in the simulation is treated as if it had this policy attached. You can include only one
   *          resource-based policy in a simulation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  ResourcePolicy?: string;

  /**
   * <p>An AWS account ID that specifies the owner of any simulated resource that does not
   *          identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or
   *          object. If <code>ResourceOwner</code> is specified, it is also used as the account owner of
   *          any <code>ResourcePolicy</code> included in the simulation. If the
   *             <code>ResourceOwner</code> parameter is not specified, then the owner of the resources
   *          and the resource policy defaults to the account of the identity provided in
   *             <code>CallerArn</code>. This parameter is required only if you specify a resource-based
   *          policy and account that owns the resource is different from the account that owns the
   *          simulated calling user <code>CallerArn</code>.</p>
   */
  ResourceOwner?: string;

  /**
   * <p>The ARN of the IAM user that you want to specify as the simulated caller of the API
   *          operations. If you do not specify a <code>CallerArn</code>, it defaults to the ARN of the
   *          user that you specify in <code>PolicySourceArn</code>, if you specified a user. If you
   *          include both a <code>PolicySourceArn</code> (for example,
   *             <code>arn:aws:iam::123456789012:user/David</code>) and a <code>CallerArn</code> (for
   *          example, <code>arn:aws:iam::123456789012:user/Bob</code>), the result is that you simulate
   *          calling the API operations as Bob, as if Bob had David's policies.</p>
   *          <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed
   *          role, federated user, or a service principal.</p>
   *          <p>
   *             <code>CallerArn</code> is required if you include a <code>ResourcePolicy</code> and the
   *             <code>PolicySourceArn</code> is not the ARN for an IAM user. This is required so that
   *          the resource-based policy's <code>Principal</code> element has a value to use in evaluating
   *          the policy.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  CallerArn?: string;

  /**
   * <p>A list of context keys and corresponding values for the simulation to use. Whenever a
   *          context key is evaluated in one of the simulated IAM permissions policies, the
   *          corresponding value is supplied.</p>
   */
  ContextEntries?: ContextEntry[];

  /**
   * <p>Specifies the type of simulation to run. Different API operations that support
   *          resource-based policies require different combinations of resources. By specifying the type
   *          of simulation to run, you enable the policy simulator to enforce the presence of the
   *          required resources to ensure reliable simulation results. If your simulation does not match
   *          one of the following scenarios, then you can omit this parameter. The following list shows
   *          each of the supported scenario values and the resources that you must define to run the
   *          simulation.</p>
   *          <p>Each of the EC2 scenarios requires that you specify instance, image, and security group
   *          resources. If your scenario includes an EBS volume, then you must specify that volume as a
   *          resource. If the EC2 scenario includes VPC, then you must supply the network interface
   *          resource. If it includes an IP subnet, then you must specify the subnet resource. For more
   *          information on the EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>
   *          in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security group</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-EBS</b>
   *                </p>
   *                <p>instance, image, security group, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security group, network interface</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS</b>
   *                </p>
   *                <p>instance, image, security group, network interface, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet, volume</p>
   *             </li>
   *          </ul>
   */
  ResourceHandlingOption?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;
}

export namespace SimulatePrincipalPolicyRequest {
  export const filterSensitiveLog = (obj: SimulatePrincipalPolicyRequest): any => ({
    ...obj,
  });
}

export interface TagRoleRequest {
  /**
   * <p>The name of the role that you want to add tags to.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the role. Each tag consists of a key name
   *       and an associated value. You can specify this with a JSON string.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagRoleRequest {
  export const filterSensitiveLog = (obj: TagRoleRequest): any => ({
    ...obj,
  });
}

export interface TagUserRequest {
  /**
   * <p>The name of the user that you want to add tags to.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the user. Each tag consists of a key name
   *       and an associated value.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagUserRequest {
  export const filterSensitiveLog = (obj: TagUserRequest): any => ({
    ...obj,
  });
}

export interface UntagRoleRequest {
  /**
   * <p>The name of the IAM role from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified role.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagRoleRequest {
  export const filterSensitiveLog = (obj: UntagRoleRequest): any => ({
    ...obj,
  });
}

export interface UntagUserRequest {
  /**
   * <p>The name of the IAM user from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified user.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagUserRequest {
  export const filterSensitiveLog = (obj: UntagUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccessKeyRequest {
  /**
   * <p>The name of the user whose key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The access key ID of the secret access key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p> The status you want to assign to the secret access key. <code>Active</code> means that
   *          the key can be used for API calls to AWS, while <code>Inactive</code> means that the key
   *          cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p> Type is 2, add custom params.</p>
   */
  Type: number | undefined;

  /**
   * <p>The new description that you want to apply to the access key.</p>
   */
  Description?: string;
}

export namespace UpdateAccessKeyRequest {
  export const filterSensitiveLog = (obj: UpdateAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountRequest {
  /**
   * <p>The name of the user whose key you want to update.</p>
   */
  AccountName: string | undefined;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  Quota?: string;

  /**
   * <p>The new description that you want to apply to the account.</p>
   */
  Description?: string;
}

export namespace UpdateAccountRequest {
  export const filterSensitiveLog = (obj: UpdateAccountRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountGroupRequest {
  /**
   * <p>The name of the user whose key you want to update.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Account group Id.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the user whose key you want to update.</p>
   */
  NewGroupName: string | undefined;

  /**
   * <p>The new description that you want to apply to the account.</p>
   */
  Description?: string;
}

export namespace UpdateAccountGroupRequest {
  export const filterSensitiveLog = (obj: UpdateAccountGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountGroupQuotaRequest {
  /**
   * <p>The name of the user whose key you want to update.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  ObjectNumberQuota?: string;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  CapacitySizeQuota?: string;
}

export namespace UpdateAccountGroupQuotaRequest {
  export const filterSensitiveLog = (obj: UpdateAccountGroupQuotaRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountPasswordPolicyRequest {
  /**
   * <p>The minimum number of characters allowed in an IAM user password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>6</code>.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one of the following
   *          non-alphanumeric characters:</p>
   *          <p>! @ # $ % ^ & * ( ) _ + - = [ ] { } | '</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          symbol character.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one numeric character (0 to
   *          9).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          numeric character.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one uppercase character
   *          from the ISO basic Latin alphabet (A to Z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          uppercase character.</p>
   */
  RequireUppercaseCharacters?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one lowercase character
   *          from the ISO basic Latin alphabet (a to z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          lowercase character.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * <p> Allows all IAM users in your account to use the AWS Management Console to change their own
   *          passwords. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/HowToPwdIAMUser.html">Letting IAM Users Change Their Own
   *             Passwords</a> in the <i>IAM User Guide</i>.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that IAM users in the account do not
   *          automatically have permissions to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>0</code>. The result is that IAM user passwords never expire.</p>
   */
  MaxPasswordAge?: number;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *          reusing.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>0</code>. The result is that IAM users are not prevented from reusing
   *          previous passwords.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * <p>Prevents IAM users from setting a new password after their password has expired. The
   *          IAM user cannot be accessed until an administrator resets the password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that IAM users can change their passwords
   *          after they expire and continue to sign in as the user.</p>
   */
  HardExpiry?: boolean;
}

export namespace UpdateAccountPasswordPolicyRequest {
  export const filterSensitiveLog = (obj: UpdateAccountPasswordPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountQoSRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;

  /**
   * <p>The ReadOps of the account.</p>
   */
  ReadOps?: string;

  /**
   * <p>The WriteOps of the account.</p>
   */
  WriteOps?: string;

  /**
   * <p>The ReadBandwidth of the account.</p>
   */
  ReadBandwidth?: string;

  /**
   * <p>The WriteBandwidth of the account.</p>
   */
  WriteBandwidth?: string;
}

export namespace UpdateAccountQoSRequest {
  export const filterSensitiveLog = (obj: UpdateAccountQoSRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountQuotaRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  ObjectNumberQuota?: string;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  CapacitySizeQuota?: string;
}

export namespace UpdateAccountQuotaRequest {
  export const filterSensitiveLog = (obj: UpdateAccountQuotaRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssumeRolePolicyRequest {
  /**
   * <p>The name of the role to update with the new policy.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace UpdateAssumeRolePolicyRequest {
  export const filterSensitiveLog = (obj: UpdateAssumeRolePolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupRequest {
  /**
   * <p>Name of the IAM group to update. If you're changing the name of the group, this is the
   *          original name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>New path for the IAM group. Only include this if changing the group's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>New name for the IAM group. Only include this if changing the group's name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  NewGroupName?: string;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupDescriptionRequest {
  /**
   * <p>Name of the IAM group to update. If you're changing the name of the group, this is the
   *          original name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The new description that you want to apply to the account.</p>
   */
  Description?: string;
}

export namespace UpdateGroupDescriptionRequest {
  export const filterSensitiveLog = (obj: UpdateGroupDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateLoginProfileRequest {
  /**
   * <p>The name of the user whose password you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The new password for the specified IAM user.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   *          <p>However,
   *          the format can be further restricted by the account administrator by setting a password
   *          policy on the AWS account. For more information, see <a>UpdateAccountPasswordPolicy</a>.</p>
   */
  Password?: string;

  /**
   * <p>Allows this new password to be used only once by requiring the specified IAM user to
   *          set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;

  /**
   * <p>The new password.</p>
   */
  NewPassword?: string;

  /**
   * <p>First login is update password, 0 means no, 1 means yes.</p>
   */
  FirstLoginUpdatePassword?: number;
}

export namespace UpdateLoginProfileRequest {
  export const filterSensitiveLog = (obj: UpdateLoginProfileRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

export interface UpdateOpenIDConnectProviderThumbprintRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which you
   *          want to update the thumbprint. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OpenID
   *          Connect provider. For more information, see <a>CreateOpenIDConnectProvider</a>.
   *       </p>
   */
  ThumbprintList: string[] | undefined;
}

export namespace UpdateOpenIDConnectProviderThumbprintRequest {
  export const filterSensitiveLog = (obj: UpdateOpenIDConnectProviderThumbprintRequest): any => ({
    ...obj,
  });
}

export interface UpdatePolicyDescriptionRequest {
  /**
   * <p>Policy Name</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>Description</p>
   */
  Description: string | undefined;
}

export namespace UpdatePolicyDescriptionRequest {
  export const filterSensitiveLog = (obj: UpdatePolicyDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleRequest {
  /**
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *          If you do not specify a value for this setting, the default maximum of one hour is applied.
   *          This setting can have a value from 1 hour to 12 hours.</p>
   *          <p>Anyone who assumes the role from the AWS CLI or API can use the
   *             <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI
   *          parameter to request a longer session. The <code>MaxSessionDuration</code> setting
   *          determines the maximum duration that can be requested using the
   *             <code>DurationSeconds</code> parameter. If users don't specify a value for the
   *             <code>DurationSeconds</code> parameter, their security credentials are valid for one
   *          hour by default. This applies when you use the <code>AssumeRole*</code> API operations or
   *          the <code>assume-role*</code> CLI operations but does not apply when you use those
   *          operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  MaxSessionDuration?: number;
}

export namespace UpdateRoleRequest {
  export const filterSensitiveLog = (obj: UpdateRoleRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleResponse {}

export namespace UpdateRoleResponse {
  export const filterSensitiveLog = (obj: UpdateRoleResponse): any => ({
    ...obj,
  });
}

export interface UpdateRoleDescriptionRequest {
  /**
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description: string | undefined;
}

export namespace UpdateRoleDescriptionRequest {
  export const filterSensitiveLog = (obj: UpdateRoleDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleDescriptionResponse {
  /**
   * <p>A structure that contains details about the modified role.</p>
   */
  Role?: Role;
}

export namespace UpdateRoleDescriptionResponse {
  export const filterSensitiveLog = (obj: UpdateRoleDescriptionResponse): any => ({
    ...obj,
  });
}

export interface UpdateSAMLProviderRequest {
  /**
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *          document includes the issuer's name, expiration information, and keys that can be used to
   *          validate the SAML authentication response (assertions) that are received from the IdP. You
   *          must generate the metadata document using the identity management software that is used as
   *          your organization's IdP.</p>
   */
  SAMLMetadataDocument: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to update.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace UpdateSAMLProviderRequest {
  export const filterSensitiveLog = (obj: UpdateSAMLProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>UpdateSAMLProvider</a> request.
 *     </p>
 */
export interface UpdateSAMLProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider that was updated.</p>
   */
  SAMLProviderArn?: string;
}

export namespace UpdateSAMLProviderResponse {
  export const filterSensitiveLog = (obj: UpdateSAMLProviderResponse): any => ({
    ...obj,
  });
}

export interface UpdateServerCertificateRequest {
  /**
   * <p>The name of the server certificate that you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The new path for the server certificate. Include this only if you are updating the
   *          server certificate's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>The new name for the server certificate. Include this only if you are updating the
   *          server certificate's name. The name of the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  NewServerCertificateName?: string;
}

export namespace UpdateServerCertificateRequest {
  export const filterSensitiveLog = (obj: UpdateServerCertificateRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If you do
   *          not specify this value, then the operation assumes the user whose credentials are used to
   *          call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The status to be assigned to the service-specific credential.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace UpdateServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (obj: UpdateServiceSpecificCredentialRequest): any => ({
    ...obj,
  });
}

export interface UpdateSigningCertificateRequest {
  /**
   * <p>The name of the IAM user the signing certificate belongs to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The ID of the signing certificate you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p> The status you want to assign to the certificate. <code>Active</code> means that the
   *          certificate can be used for API calls to AWS <code>Inactive</code> means that the
   *          certificate cannot be used.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace UpdateSigningCertificateRequest {
  export const filterSensitiveLog = (obj: UpdateSigningCertificateRequest): any => ({
    ...obj,
  });
}

export interface UpdateSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status to assign to the SSH public key. <code>Active</code> means that the key can
   *          be used for authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the
   *          key cannot be used.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace UpdateSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: UpdateSSHPublicKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>New path for the IAM user. Include this parameter only if you're changing the user's
   *          path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>New name for the user. Include this parameter only if you're changing the user's
   *          name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  NewUserName?: string;

  /**
   * <p>0 means default, 1 means custom.</p>
   */
  Type?: number;

  /**
   * <p>Status of user.</p>
   */
  UserStatus?: UserStatusType | string;

  /**
   * <p>Description of user.</p>
   */
  Description?: string;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserAccessKeyRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The access key ID of the secret access key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the user.</p>
   */
  Status?: UserStatusType | string;
}

export namespace UpdateUserAccessKeyRequest {
  export const filterSensitiveLog = (obj: UpdateUserAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserAccessKeyDescriptionRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The access key ID of the secret access key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p>Description of user.</p>
   */
  Description?: string;
}

export namespace UpdateUserAccessKeyDescriptionRequest {
  export const filterSensitiveLog = (obj: UpdateUserAccessKeyDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserAccessTypeRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Access type, 1 means web, 2 means api, 3 means all.</p>
   */
  AccessType?: number;

  /**
   * <p>The new password.</p>
   */
  NewPassword?: string;
}

export namespace UpdateUserAccessTypeRequest {
  export const filterSensitiveLog = (obj: UpdateUserAccessTypeRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

export interface UpdateUserDescriptionRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Description of user.</p>
   */
  Description?: string;
}

export namespace UpdateUserDescriptionRequest {
  export const filterSensitiveLog = (obj: UpdateUserDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserEmailRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  NewEmail?: string;
}

export namespace UpdateUserEmailRequest {
  export const filterSensitiveLog = (obj: UpdateUserEmailRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserPasswordRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The new password.</p>
   */
  NewPassword?: string;

  /**
   * <p>The IAM user's current password.</p>
   */
  OldPassword: string | undefined;

  /**
   * <p>First login is update password, 0 means no, 1 means yes.</p>
   */
  FirstLoginUpdatePassword?: number;
}

export namespace UpdateUserPasswordRequest {
  export const filterSensitiveLog = (obj: UpdateUserPasswordRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
    ...(obj.OldPassword && { OldPassword: SENSITIVE_STRING }),
  });
}

export interface UpdateUserQoSRequest {
  /**
   * <p>User name.</p>
   */
  UserName?: string;

  /**
   * <p>The ReadOps of the account.</p>
   */
  ReadOps?: string;

  /**
   * <p>The WriteOps of the account.</p>
   */
  WriteOps?: string;

  /**
   * <p>The ReadBandwidth of the account.</p>
   */
  ReadBandwidth?: string;

  /**
   * <p>The WriteBandwidth of the account.</p>
   */
  WriteBandwidth?: string;
}

export namespace UpdateUserQoSRequest {
  export const filterSensitiveLog = (obj: UpdateUserQoSRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserStatusRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the user.</p>
   */
  Status?: UserStatusType | string;
}

export namespace UpdateUserStatusRequest {
  export const filterSensitiveLog = (obj: UpdateUserStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 */
export interface KeyPairMismatchException extends __SmithyException, $MetadataBearer {
  name: "KeyPairMismatchException";
  $fault: "client";
  message?: string;
}

export namespace KeyPairMismatchException {
  export const filterSensitiveLog = (obj: KeyPairMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 */
export interface MalformedCertificateException extends __SmithyException, $MetadataBearer {
  name: "MalformedCertificateException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCertificateException {
  export const filterSensitiveLog = (obj: MalformedCertificateException): any => ({
    ...obj,
  });
}

export interface UploadServerCertificateRequest {
  /**
   * <p>The path for the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).
   *          This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   *          <note>
   *             <p> If you are uploading a server certificate specifically for use with Amazon
   *             CloudFront distributions, you must specify a path using the <code>path</code> parameter.
   *             The path must begin with <code>/cloudfront</code> and must include a trailing slash (for
   *             example, <code>/cloudfront/test/</code>).</p>
   *          </note>
   */
  Path?: string;

  /**
   * <p>The name for the server certificate. Do not include the path in this value. The name of
   *          the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The contents of the public key certificate in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The contents of the private key in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PrivateKey: string | undefined;

  /**
   * <p>The contents of the certificate chain. This is typically a concatenation of the
   *          PEM-encoded public key certificates of the chain.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  CertificateChain?: string;
}

export namespace UploadServerCertificateRequest {
  export const filterSensitiveLog = (obj: UploadServerCertificateRequest): any => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the response to a successful <a>UploadServerCertificate</a>
 *       request. </p>
 */
export interface UploadServerCertificateResponse {
  /**
   * <p>The meta information of the uploaded server certificate without its certificate body,
   *          certificate chain, and private key.</p>
   */
  ServerCertificateMetadata?: ServerCertificateMetadata;
}

export namespace UploadServerCertificateResponse {
  export const filterSensitiveLog = (obj: UploadServerCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 */
export interface DuplicateCertificateException extends __SmithyException, $MetadataBearer {
  name: "DuplicateCertificateException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateCertificateException {
  export const filterSensitiveLog = (obj: DuplicateCertificateException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the certificate is invalid.</p>
 */
export interface InvalidCertificateException extends __SmithyException, $MetadataBearer {
  name: "InvalidCertificateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidCertificateException {
  export const filterSensitiveLog = (obj: InvalidCertificateException): any => ({
    ...obj,
  });
}

export interface UploadSigningCertificateRequest {
  /**
   * <p>The name of the user the signing certificate is for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The contents of the signing certificate.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  CertificateBody: string | undefined;
}

export namespace UploadSigningCertificateRequest {
  export const filterSensitiveLog = (obj: UploadSigningCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>UploadSigningCertificate</a>
 *       request. </p>
 */
export interface UploadSigningCertificateResponse {
  /**
   * <p>Information about the certificate.</p>
   */
  Certificate: SigningCertificate | undefined;
}

export namespace UploadSigningCertificateResponse {
  export const filterSensitiveLog = (obj: UploadSigningCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 */
export interface DuplicateSSHPublicKeyException extends __SmithyException, $MetadataBearer {
  name: "DuplicateSSHPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateSSHPublicKeyException {
  export const filterSensitiveLog = (obj: DuplicateSSHPublicKeyException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the public key is malformed or otherwise
 *       invalid.</p>
 */
export interface InvalidPublicKeyException extends __SmithyException, $MetadataBearer {
  name: "InvalidPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPublicKeyException {
  export const filterSensitiveLog = (obj: InvalidPublicKeyException): any => ({
    ...obj,
  });
}

export interface UploadSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user to associate the SSH public key with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. The
   *          minimum bit-length of the public key is 2048 bits. For example, you can generate a 2048-bit
   *          key, and the resulting PEM file is 1679 bytes long.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  SSHPublicKeyBody: string | undefined;
}

export namespace UploadSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: UploadSSHPublicKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>UploadSSHPublicKey</a>
 *       request.</p>
 */
export interface UploadSSHPublicKeyResponse {
  /**
   * <p>Contains information about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

export namespace UploadSSHPublicKeyResponse {
  export const filterSensitiveLog = (obj: UploadSSHPublicKeyResponse): any => ({
    ...obj,
  });
}

export interface UserLoginRequest {
  /**
   * <p>Account Id.</p>
   */
  AccountID?: string;

  /**
   * <p>Account name, required when LoginType is 1.</p>
   */
  AccountName?: string;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  UserName?: string;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  Email?: string;

  /**
   * <p>Password</p>
   */
  Password: string | undefined;

  /**
   * <p>1 means need, 0 means no need.</p>
   */
  NeedInnerCert?: number;
}

export namespace UserLoginRequest {
  export const filterSensitiveLog = (obj: UserLoginRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface UserLoginResponse {
  /**
   * <p>Login succeed or failed.</p>
   */
  Result: string | undefined;

  /**
   * <p>0 means no need update, 1 means need update.</p>
   */
  NeedUpdatePassword?: number;

  /**
   * <p>Account info.</p>
   */
  Account?: AccountType;

  /**
   * <p>A structure containing details about the IAM user.</p>
   *          <important>
   *             <p>Due to a service issue, password last used data does not include password use from
   *             May 3, 2018 22:50 PDT to May 23, 2018 14:08 PDT. This affects <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html">last
   *                sign-in</a> dates shown in the IAM console and password last used dates in the
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">IAM credential report</a>, and returned by this GetUser API. If users signed in
   *             during the affected time, the password last used date that is returned is the date the
   *             user last signed in before May 3, 2018. For users that signed in after May 23, 2018
   *             14:08 PDT, the returned password last used date is accurate.</p>
   *             <p>You can use password last used information to identify unused credentials for
   *             deletion. For example, you might delete users who did not sign in to AWS in the last 90
   *             days. In cases like this, we recommend that you adjust your evaluation window to include
   *             dates after May 23, 2018. Alternatively, if your users use access keys to access AWS
   *             programmatically you can refer to access key last used information because it is
   *             accurate for all dates. </p>
   *          </important>
   */
  User: User | undefined;
}

export namespace UserLoginResponse {
  export const filterSensitiveLog = (obj: UserLoginResponse): any => ({
    ...obj,
    ...(obj.Account && { Account: AccountType.filterSensitiveLog(obj.Account) }),
  });
}
