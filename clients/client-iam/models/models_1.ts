import { SSHPublicKey, ServerCertificateMetadata, SigningCertificate, StatusType, UserStatusType } from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
