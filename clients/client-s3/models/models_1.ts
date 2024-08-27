import {
  AccelerateConfiguration,
  AccessControlPolicy,
  AnalyticsConfiguration,
  Bucket,
  BucketCannedACL,
  BucketLifecycleConfiguration,
  BucketTrashObj,
  CORSConfiguration,
  DeletedObject,
  ErrorDocument,
  Grant,
  IndexDocument,
  IntelligentTieringConfiguration,
  InventoryConfiguration,
  LoggingEnabled,
  MetaSearchConfiguration,
  MetricsConfiguration,
  NotificationConfiguration,
  ObjectCannedACL,
  ObjectLockConfiguration,
  ObjectLockLegalHold,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetention,
  ObjectSizeRange,
  ObjectStorageClass,
  Owner,
  OwnershipControls,
  Payer,
  QoSConfiguration,
  Quota,
  RedirectAllRequestsTo,
  RefererConfiguration,
  Region,
  ReplicationConfiguration,
  ReplicationStatus,
  RequestCharged,
  RequestPayer,
  RoutingRule,
  ServerSideEncryption,
  ServerSideEncryptionConfiguration,
  Snapshot,
  StatisticConfiguration,
  StorageClass,
  Tag,
  TagMultiInOrMode,
  Trash,
  VersioningConfiguration,
  _Error,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

export interface GetObjectTaggingRequest {
  /**
   * <p>The bucket name containing the object for which to get the tagging information. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which to get the tagging information.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object for which to get the tagging information.</p>
   */
  VersionId?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectTaggingRequest {
  export const filterSensitiveLog = (obj: GetObjectTaggingRequest): any => ({
    ...obj,
  });
}

export interface GetObjectTorrentOutput {
  /**
   * <p>A Bencoded dictionary as defined by the BitTorrent specification</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace GetObjectTorrentOutput {
  export const filterSensitiveLog = (obj: GetObjectTorrentOutput): any => ({
    ...obj,
  });
}

export interface GetObjectTorrentRequest {
  /**
   * <p>The name of the bucket containing the object for which to get the torrent files.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The object key for which to get the information.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectTorrentRequest {
  export const filterSensitiveLog = (obj: GetObjectTorrentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A Retention configuration for an object.</p>
 */
export interface WORM {
  /**
   * <p>宽限期</p>
   */
  GraceUntilDate?: Date;

  /**
   * <p>The date on which this Object WORM will expire.</p>
   */
  RetainUntilDate?: Date;
}

export namespace WORM {
  export const filterSensitiveLog = (obj: WORM): any => ({
    ...obj,
  });
}

export interface GetObjectWORMOutput {
  /**
   * <p>The container element for an object's retention settings.</p>
   */
  WORM?: WORM;
}

export namespace GetObjectWORMOutput {
  export const filterSensitiveLog = (obj: GetObjectWORMOutput): any => ({
    ...obj,
  });
}

export interface GetObjectWORMRequest {
  /**
   * <p>The bucket name containing the object whose retention settings you want to retrieve. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object whose retention settings you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * <p>The version ID for the object whose retention settings you want to retrieve.</p>
   */
  VersionId?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectWORMRequest {
  export const filterSensitiveLog = (obj: GetObjectWORMRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A metadata key-value pair to store with an object.</p>
 */
export interface UserMetadataSingle {
  /**
   * <p>Name of the Object.</p>
   */
  Key?: string;

  /**
   * <p>Value of the Object.</p>
   */
  Value?: string;
}

export namespace UserMetadataSingle {
  export const filterSensitiveLog = (obj: UserMetadataSingle): any => ({
    ...obj,
  });
}

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
 *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
 *          configured inside the And operator.</p>
 */
export interface OSCPPolicyAndRuleOperator {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  PrefixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Suffix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  SuffixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeBetween?: ObjectSizeRange;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  UserMetadata?: UserMetadataSingle;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tags?: Tag[];
}

export namespace OSCPPolicyAndRuleOperator {
  export const filterSensitiveLog = (obj: OSCPPolicyAndRuleOperator): any => ({
    ...obj,
  });
}

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
 *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
 *          configured inside the And operator.</p>
 */
export interface OSCPPolicyOrRuleOperator {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  PrefixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Suffix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  SuffixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeBetween?: ObjectSizeRange;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  UserMetadata?: UserMetadataSingle;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tag?: Tag;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  And?: TagMultiInOrMode;
}

export namespace OSCPPolicyOrRuleOperator {
  export const filterSensitiveLog = (obj: OSCPPolicyOrRuleOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
 *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
 *             <code>And</code> specified.</p>
 */
export type OSCPPolicyFilter =
  | OSCPPolicyFilter.AndMember
  | OSCPPolicyFilter.ObjectSizeBetweenMember
  | OSCPPolicyFilter.ObjectSizeEqualToMember
  | OSCPPolicyFilter.ObjectSizeGreaterThanMember
  | OSCPPolicyFilter.ObjectSizeGreaterThanOrEqualToMember
  | OSCPPolicyFilter.ObjectSizeLessThanMember
  | OSCPPolicyFilter.ObjectSizeLessThanOrEqualToMember
  | OSCPPolicyFilter.OrMember
  | OSCPPolicyFilter.PrefixMember
  | OSCPPolicyFilter.PrefixNotMatchMember
  | OSCPPolicyFilter.SuffixMember
  | OSCPPolicyFilter.SuffixNotMatchMember
  | OSCPPolicyFilter.TagMember
  | OSCPPolicyFilter.UserMetadataMember
  | OSCPPolicyFilter.$UnknownMember;

export namespace OSCPPolicyFilter {
  /**
   * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
   *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
   *          configured inside the And operator.</p>
   */
  export interface AndMember {
    And: OSCPPolicyAndRuleOperator;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
   *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
   *          configured inside the And operator.</p>
   */
  export interface OrMember {
    And?: never;
    Or: OSCPPolicyOrRuleOperator;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to apply.</p>
   */
  export interface TagMember {
    And?: never;
    Or?: never;
    Tag: Tag;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface PrefixMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix: string;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface PrefixNotMatchMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch: string;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface SuffixMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix: string;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface SuffixNotMatchMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch: string;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeLessThanMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan: number;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeLessThanOrEqualToMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo: number;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeEqualToMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo: number;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeBetweenMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween: ObjectSizeRange;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeGreaterThanOrEqualToMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo: number;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeGreaterThanMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan: number;
    UserMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface UserMetadataMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata: UserMetadataSingle;
    $unknown?: never;
  }

  export interface $UnknownMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    UserMetadata?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    And: (value: OSCPPolicyAndRuleOperator) => T;
    Or: (value: OSCPPolicyOrRuleOperator) => T;
    Tag: (value: Tag) => T;
    Prefix: (value: string) => T;
    PrefixNotMatch: (value: string) => T;
    Suffix: (value: string) => T;
    SuffixNotMatch: (value: string) => T;
    ObjectSizeLessThan: (value: number) => T;
    ObjectSizeLessThanOrEqualTo: (value: number) => T;
    ObjectSizeEqualTo: (value: number) => T;
    ObjectSizeBetween: (value: ObjectSizeRange) => T;
    ObjectSizeGreaterThanOrEqualTo: (value: number) => T;
    ObjectSizeGreaterThan: (value: number) => T;
    UserMetadata: (value: UserMetadataSingle) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OSCPPolicyFilter, visitor: Visitor<T>): T => {
    if (value.And !== undefined) return visitor.And(value.And);
    if (value.Or !== undefined) return visitor.Or(value.Or);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.PrefixNotMatch !== undefined) return visitor.PrefixNotMatch(value.PrefixNotMatch);
    if (value.Suffix !== undefined) return visitor.Suffix(value.Suffix);
    if (value.SuffixNotMatch !== undefined) return visitor.SuffixNotMatch(value.SuffixNotMatch);
    if (value.ObjectSizeLessThan !== undefined) return visitor.ObjectSizeLessThan(value.ObjectSizeLessThan);
    if (value.ObjectSizeLessThanOrEqualTo !== undefined)
      return visitor.ObjectSizeLessThanOrEqualTo(value.ObjectSizeLessThanOrEqualTo);
    if (value.ObjectSizeEqualTo !== undefined) return visitor.ObjectSizeEqualTo(value.ObjectSizeEqualTo);
    if (value.ObjectSizeBetween !== undefined) return visitor.ObjectSizeBetween(value.ObjectSizeBetween);
    if (value.ObjectSizeGreaterThanOrEqualTo !== undefined)
      return visitor.ObjectSizeGreaterThanOrEqualTo(value.ObjectSizeGreaterThanOrEqualTo);
    if (value.ObjectSizeGreaterThan !== undefined) return visitor.ObjectSizeGreaterThan(value.ObjectSizeGreaterThan);
    if (value.UserMetadata !== undefined) return visitor.UserMetadata(value.UserMetadata);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: OSCPPolicyFilter): any => {
    if (obj.And !== undefined) return { And: OSCPPolicyAndRuleOperator.filterSensitiveLog(obj.And) };
    if (obj.Or !== undefined) return { Or: OSCPPolicyOrRuleOperator.filterSensitiveLog(obj.Or) };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.PrefixNotMatch !== undefined) return { PrefixNotMatch: obj.PrefixNotMatch };
    if (obj.Suffix !== undefined) return { Suffix: obj.Suffix };
    if (obj.SuffixNotMatch !== undefined) return { SuffixNotMatch: obj.SuffixNotMatch };
    if (obj.ObjectSizeLessThan !== undefined) return { ObjectSizeLessThan: obj.ObjectSizeLessThan };
    if (obj.ObjectSizeLessThanOrEqualTo !== undefined)
      return { ObjectSizeLessThanOrEqualTo: obj.ObjectSizeLessThanOrEqualTo };
    if (obj.ObjectSizeEqualTo !== undefined) return { ObjectSizeEqualTo: obj.ObjectSizeEqualTo };
    if (obj.ObjectSizeBetween !== undefined)
      return { ObjectSizeBetween: ObjectSizeRange.filterSensitiveLog(obj.ObjectSizeBetween) };
    if (obj.ObjectSizeGreaterThanOrEqualTo !== undefined)
      return { ObjectSizeGreaterThanOrEqualTo: obj.ObjectSizeGreaterThanOrEqualTo };
    if (obj.ObjectSizeGreaterThan !== undefined) return { ObjectSizeGreaterThan: obj.ObjectSizeGreaterThan };
    if (obj.UserMetadata !== undefined)
      return { UserMetadata: UserMetadataSingle.filterSensitiveLog(obj.UserMetadata) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
 */
export interface OSCPPolicy {
  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
   *          <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
   *          <code>And</code> specified. <code>Filter</code> is required if the <code>LifecycleRule</code>
   *          does not containt a <code>Prefix</code> element.</p>
   */
  Filter?: OSCPPolicyFilter;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Priority?: number;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  Comment?: string;
}

export namespace OSCPPolicy {
  export const filterSensitiveLog = (obj: OSCPPolicy): any => ({
    ...obj,
    ...(obj.Filter && { Filter: OSCPPolicyFilter.filterSensitiveLog(obj.Filter) }),
  });
}

export interface GetOSCPConfigurationOutput {
  /**
   * <p>Container for a lifecycle rule.</p>
   */
  Policies?: OSCPPolicy[];
}

export namespace GetOSCPConfigurationOutput {
  export const filterSensitiveLog = (obj: GetOSCPConfigurationOutput): any => ({
    ...obj,
    ...(obj.Policies && { Policies: obj.Policies.map((item) => OSCPPolicy.filterSensitiveLog(item)) }),
  });
}

export interface GetOSCPConfigurationRequest {
  /**
   * <p>The name of the bucket for which to get the lifecycle information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetOSCPConfigurationRequest {
  export const filterSensitiveLog = (obj: GetOSCPConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can
 *          enable the configuration options in any combination. For more information about when Amazon S3
 *          considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. </p>
 */
export interface PublicAccessBlockConfiguration {
  /**
   * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket
   *          and objects in this bucket. Setting this element to <code>TRUE</code> causes the following
   *          behavior:</p>
   *          <ul>
   *             <li>
   *                <p>PUT Bucket acl and PUT Object acl calls fail if the specified ACL is
   *                public.</p>
   *             </li>
   *             <li>
   *                <p>PUT Object calls fail if the request includes a public ACL.</p>
   *             </li>
   *             <li>
   *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
   *             </li>
   *          </ul>
   *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this
   *          bucket. Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on
   *          this bucket and objects in this bucket.</p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this
   *          element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the
   *          specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting
   *          this element to <code>TRUE</code> restricts access to this bucket to only AWS service
   *          principals and authorized users within this account if the bucket has a public
   *          policy.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that
   *          public and cross-account access within any public bucket policy, including non-public
   *          delegation to specific accounts, is blocked.</p>
   */
  RestrictPublicBuckets?: boolean;
}

export namespace PublicAccessBlockConfiguration {
  export const filterSensitiveLog = (obj: PublicAccessBlockConfiguration): any => ({
    ...obj,
  });
}

export interface GetPublicAccessBlockOutput {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon S3
   *          bucket.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export namespace GetPublicAccessBlockOutput {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockOutput): any => ({
    ...obj,
  });
}

export interface GetPublicAccessBlockRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to retrieve. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface GetRefererOutput {
  /**
   * <p>The configuration information for the bucket.</p>
   */
  RefererConfiguration?: RefererConfiguration;
}

export namespace GetRefererOutput {
  export const filterSensitiveLog = (obj: GetRefererOutput): any => ({
    ...obj,
  });
}

export interface GetRefererRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to retrieve. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetRefererRequest {
  export const filterSensitiveLog = (obj: GetRefererRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for specifying the default WORM retention settings for new
 *          objects placed in the specified bucket.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The <code>DefaultRetention</code> settings require a
 *                period.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>WORMDefaultRetention</code> period can be either <code>Days</code>
 *                or <code>Years</code> but you must select one. You cannot specify <code>Days</code>
 *                and <code>Years</code> at the same time.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export interface WORMDefaultRetention {
  /**
   * <p>The number of days that you want to specify for the default retention period.</p>
   */
  Days?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Years?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Months?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Hours?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Minutes?: number;
}

export namespace WORMDefaultRetention {
  export const filterSensitiveLog = (obj: WORMDefaultRetention): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for an WORM rule.</p>
 */
export interface WORMRule {
  /**
   * <p>The default WORM retention mode and period that you want to apply to new objects
   *          placed in the specified bucket. Bucket settings require a period.
   *          The period can be either <code>Days</code> or <code>Years</code> but you must select one.
   *          You cannot specify <code>Days</code> and <code>Years</code> at the same time.</p>
   */
  DefaultRetention?: WORMDefaultRetention;

  /**
   * <p>The default WORM retention mode and period that you want to apply to new objects
   *          placed in the specified bucket. Bucket settings require a period.
   *          The period can be either <code>Days</code> or <code>Years</code> but you must select one.
   *          You cannot specify <code>Days</code> and <code>Years</code> at the same time.</p>
   */
  DefaultGracePeriod?: WORMDefaultRetention;
}

export namespace WORMRule {
  export const filterSensitiveLog = (obj: WORMRule): any => ({
    ...obj,
  });
}

export enum WORMEnabled {
  Enabled = "Enabled",
}

/**
 * <p>The container element for WORM configuration parameters.</p>
 */
export interface WORMConfiguration {
  /**
   * <p>Indicates whether this bucket has an WORM configuration enabled.
   *          Enable <code>WORMEnabled</code> when you apply <code>WORMConfiguration</code>
   *          to a bucket. </p>
   */
  WORMEnabled?: WORMEnabled | string;

  /**
   * <p>Specifies the WORM rule for the specified object. Enable the this rule when you apply
   *          <code>WORMConfiguration</code> to a bucket. Bucket settings require both a mode and a period.
   *          The period can be either <code>Days</code> or <code>Years</code> but you must select one.
   *          You cannot specify <code>Days</code> and <code>Years</code> at the same time.</p>
   */
  Rule?: WORMRule;
}

export namespace WORMConfiguration {
  export const filterSensitiveLog = (obj: WORMConfiguration): any => ({
    ...obj,
  });
}

export interface GetWORMConfigurationOutput {
  /**
   * <p>The specified bucket's WORM configuration.</p>
   */
  WORMConfiguration?: WORMConfiguration;
}

export namespace GetWORMConfigurationOutput {
  export const filterSensitiveLog = (obj: GetWORMConfigurationOutput): any => ({
    ...obj,
  });
}

export interface GetWORMConfigurationRequest {
  /**
   * <p>The bucket whose WORM configuration you want to retrieve.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetWORMConfigurationRequest {
  export const filterSensitiveLog = (obj: GetWORMConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A Retain Period configuration for an object.</p>
 */
export interface WORMRetainPeriod {
  /**
   * <p>The date on which this Worm Retain Period will expire.</p>
   */
  RetainUntilDate?: Date;
}

export namespace WORMRetainPeriod {
  export const filterSensitiveLog = (obj: WORMRetainPeriod): any => ({
    ...obj,
  });
}

export interface GetWORMRetainPeriodOutput {
  /**
   * <p>The current Retain Period status for the specified object.</p>
   */
  RetainPeriod?: WORMRetainPeriod;
}

export namespace GetWORMRetainPeriodOutput {
  export const filterSensitiveLog = (obj: GetWORMRetainPeriodOutput): any => ({
    ...obj,
  });
}

export interface GetWORMRetainPeriodRequest {
  /**
   * <p>The bucket name containing the object whose Retain Period status you want to retrieve. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object whose Retain Period status you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * <p>The version ID of the object whose Retain Period status you want to retrieve.</p>
   */
  VersionId?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetWORMRetainPeriodRequest {
  export const filterSensitiveLog = (obj: GetWORMRetainPeriodRequest): any => ({
    ...obj,
  });
}

export interface HeadBucketRequest {
  /**
   * <p>The bucket name.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Custom header, when you don't want return Content-Length, set true.</p>
   */
  WithoutContentLength?: boolean;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace HeadBucketRequest {
  export const filterSensitiveLog = (obj: HeadBucketRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified bucket does not exist.</p>
 */
export interface NoSuchBucket extends __SmithyException, $MetadataBearer {
  name: "NoSuchBucket";
  $fault: "client";
}

export namespace NoSuchBucket {
  export const filterSensitiveLog = (obj: NoSuchBucket): any => ({
    ...obj,
  });
}

export interface HeadBucketObjTrashRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>当前软链接名称</p>
   */
  Key: string | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token: string | undefined;

  /**
   * <p>Custom header, when you don't want return Content-Length, set true.</p>
   */
  WithoutContentLength?: boolean;
}

export namespace HeadBucketObjTrashRequest {
  export const filterSensitiveLog = (obj: HeadBucketObjTrashRequest): any => ({
    ...obj,
  });
}

export type ArchiveStatus = "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";

export interface HeadObjectOutput {
  /**
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If
   *          false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>加密方式是否为SSEC</p>
   */
  EncryptionMode?: string;

  /**
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes
   *          this header. It includes the expiry-date and rule-id key-value pairs providing object
   *          expiration information. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>If the object is an archived object (an object whose storage class is GLACIER), the
   *          response includes this header if either the archive restoration is in progress (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a> or an archive copy is already restored.</p>
   *
   *          <p> If an archive copy is already restored, the header value indicates when Amazon S3 is
   *          scheduled to delete the object copy. For example:</p>
   *
   *          <p>
   *             <code>x-amz-restore: ongoing-request="false", expiry-date="Fri, 23 Dec 2012 00:00:00
   *             GMT"</code>
   *          </p>
   *
   *          <p>If the object restoration is in progress, the header returns the value
   *             <code>ongoing-request="true"</code>.</p>
   *
   *          <p>For more information about archiving objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-transition-general-considerations">Transitioning Objects: General Considerations</a>.</p>
   */
  Restore?: string;

  /**
   * <p>The archive state of the head object.</p>
   */
  ArchiveStatus?: ArchiveStatus | string;

  /**
   * <p>Last modified date of the object</p>
   */
  LastModified?: Date;

  /**
   * <p>The date the Object was Last Modified</p>
   */
  DeletedTime?: Date;

  /**
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a
   *          resource found at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code>
   *          headers. This can happen if you create metadata using an API like SOAP that supports more
   *          flexible metadata than the REST API. For example, using SOAP, you can create metadata whose
   *          values are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>If the object is stored using server-side encryption either with an AWS KMS customer
   *          master key (CMK) or an Amazon S3-managed encryption key, the response includes this header with
   *          the value of the server-side encryption algorithm used when storing this object in Amazon
   *          S3 (for example, AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage
   *             Classes</a>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Amazon S3 can return this header if your request involves a bucket that is either a source or
   *          a destination in a replication rule.</p>
   *
   *          <p>In replication, you have a source bucket on which you configure replication and
   *          destination bucket or buckets where Amazon S3 stores object replicas. When you request an object
   *             (<code>GetObject</code>) or object metadata (<code>HeadObject</code>) from these
   *          buckets, Amazon S3 will return the <code>x-amz-replication-status</code> header in the response
   *          as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If requesting an object from the source bucket — Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header if the object in your request is
   *                eligible for replication.</p>
   *                <p> For example, suppose that in your replication configuration, you specify object
   *                prefix <code>TaxDocs</code> requesting Amazon S3 to replicate objects with key prefix
   *                   <code>TaxDocs</code>. Any objects you upload with this key name prefix, for
   *                example <code>TaxDocs/document1.pdf</code>, are eligible for replication. For any
   *                object request with this key name prefix, Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header with value PENDING, COMPLETED or
   *                FAILED indicating object replication status.</p>
   *             </li>
   *             <li>
   *                <p>If requesting an object from a destination bucket — Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header with value REPLICA if the object in
   *                your request is a replica that Amazon S3 created and there is no replica modification
   *                replication in progress.</p>
   *             </li>
   *             <li>
   *                <p>When replicating objects to multiple destination buckets the
   *                   <code>x-amz-replication-status</code> header acts differently. The header of the
   *                source object will only return a value of COMPLETED when replication is successful to
   *                all destinations. The header will remain at value PENDING until replication has
   *                completed for all destinations. If one or more destinations fails replication the
   *                header will return FAILED. </p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Replication</a>.</p>
   */
  ReplicationStatus?: ReplicationStatus | string;

  /**
   * <p>The count of parts this object has.</p>
   */
  PartsCount?: number;

  /**
   * <p>The Object Lock mode, if any, that's in effect for this object. This header is only
   *          returned if the requester has the <code>s3:GetObjectRetention</code> permission. For more
   *          information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object
   *             Lock</a>. </p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when the Object Lock retention period expires. This header is only
   *          returned if the requester has the <code>s3:GetObjectRetention</code> permission.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether a legal hold is in effect for this object. This header is only
   *          returned if the requester has the <code>s3:GetObjectLegalHold</code> permission. This
   *          header is not returned if the specified version of this object has never had a legal hold
   *          applied. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
}

export namespace HeadObjectOutput {
  export const filterSensitiveLog = (obj: HeadObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface HeadObjectRequest {
  /**
   * <p>The name of the bucket containing the object.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified,
   *          otherwise return a 412 (precondition failed).</p>
   */
  IfMatch?: string;

  /**
   * <p>Return the object only if it has been modified since the specified time, otherwise
   *          return a 304 (not modified).</p>
   */
  IfModifiedSince?: Date;

  /**
   * <p>Return the object only if its entity tag (ETag) is different from the one specified,
   *          otherwise return a 304 (not modified).</p>
   */
  IfNoneMatch?: string;

  /**
   * <p>Return the object only if it has not been modified since the specified time, otherwise
   *          return a 412 (precondition failed).</p>
   */
  IfUnmodifiedSince?: Date;

  /**
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Downloads the specified range bytes of an object. For more information about the HTTP
   *          Range header, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>.</p>
   *          <note>
   *             <p>Amazon S3 doesn't support retrieving multiple ranges of data per <code>GET</code>
   *             request.</p>
   *          </note>
   */
  Range?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>是否查询加密方式</p>
   */
  FetchEncryptionType?: boolean;

  /**
   * <p>Custom header, when you don't want return Content-Length, set true.</p>
   */
  WithoutContentLength?: boolean;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000.
   *          Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about
   *          the size of the part and the number of parts in this object.</p>
   */
  PartNumber?: number;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>If return error info.</p>
   */
  WithErrorInfo?: boolean;
}

export namespace HeadObjectRequest {
  export const filterSensitiveLog = (obj: HeadObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

export interface ListBucketAnalyticsConfigurationsOutput {
  /**
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker that is used as a starting point for this analytics configuration list
   *          response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which
   *          indicates that there are more analytics configurations to list. The next request must
   *          include this <code>NextContinuationToken</code>. The token is obfuscated and is not a
   *          usable value.</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>The list of analytics configurations for a bucket.</p>
   */
  AnalyticsConfigurationList?: AnalyticsConfiguration[];
}

export namespace ListBucketAnalyticsConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketAnalyticsConfigurationsOutput): any => ({
    ...obj,
    ...(obj.AnalyticsConfigurationList && {
      AnalyticsConfigurationList: obj.AnalyticsConfigurationList.map((item) =>
        AnalyticsConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListBucketAnalyticsConfigurationsRequest {
  /**
   * <p>The name of the bucket from which analytics configurations are retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ContinuationToken that represents a placeholder from where this request should
   *          begin.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListBucketAnalyticsConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketAnalyticsConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketIntelligentTieringConfigurationsOutput {
  /**
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The ContinuationToken that represents a placeholder from where this request should
   *          begin.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The marker used to continue this inventory configuration listing. Use the
   *             <code>NextContinuationToken</code> from this response to continue the listing in a
   *          subsequent request. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>The list of S3 Intelligent-Tiering configurations for a bucket.</p>
   */
  IntelligentTieringConfigurationList?: IntelligentTieringConfiguration[];
}

export namespace ListBucketIntelligentTieringConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketIntelligentTieringConfigurationsOutput): any => ({
    ...obj,
  });
}

export interface ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ContinuationToken that represents a placeholder from where this request should
   *          begin.</p>
   */
  ContinuationToken?: string;
}

export namespace ListBucketIntelligentTieringConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketIntelligentTieringConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketInventoryConfigurationsOutput {
  /**
   * <p>If sent in the request, the marker that is used as a starting point for this inventory
   *          configuration list response.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The list of inventory configurations for a bucket.</p>
   */
  InventoryConfigurationList?: InventoryConfiguration[];

  /**
   * <p>Tells whether the returned list of inventory configurations is complete. A value of true
   *          indicates that the list is not complete and the NextContinuationToken is provided for a
   *          subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker used to continue this inventory configuration listing. Use the
   *             <code>NextContinuationToken</code> from this response to continue the listing in a
   *          subsequent request. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;
}

export namespace ListBucketInventoryConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketInventoryConfigurationsOutput): any => ({
    ...obj,
    ...(obj.InventoryConfigurationList && {
      InventoryConfigurationList: obj.InventoryConfigurationList.map((item) =>
        InventoryConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListBucketInventoryConfigurationsRequest {
  /**
   * <p>The name of the bucket containing the inventory configurations to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The marker used to continue an inventory configuration listing that has been truncated.
   *          Use the NextContinuationToken from a previously truncated list response to continue the
   *          listing. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListBucketInventoryConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketInventoryConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketMetricsConfigurationsOutput {
  /**
   * <p>Indicates whether the returned list of metrics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker that is used as a starting point for this metrics configuration list
   *          response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The marker used to continue a metrics configuration listing that has been truncated. Use
   *          the <code>NextContinuationToken</code> from a previously truncated list response to
   *          continue the listing. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>The list of metrics configurations for a bucket.</p>
   */
  MetricsConfigurationList?: MetricsConfiguration[];
}

export namespace ListBucketMetricsConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketMetricsConfigurationsOutput): any => ({
    ...obj,
    ...(obj.MetricsConfigurationList && {
      MetricsConfigurationList: obj.MetricsConfigurationList.map((item) =>
        MetricsConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListBucketMetricsConfigurationsRequest {
  /**
   * <p>The name of the bucket containing the metrics configurations to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The marker that is used to continue a metrics configuration listing that has been
   *          truncated. Use the NextContinuationToken from a previously truncated list response to
   *          continue the listing. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListBucketMetricsConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketMetricsConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketsOutput {
  /**
   * <p>The list of buckets owned by the requestor.</p>
   */
  Buckets?: Bucket[];

  /**
   * <p>The owner of the buckets listed.</p>
   */
  Owner?: Owner;
}

export namespace ListBucketsOutput {
  export const filterSensitiveLog = (obj: ListBucketsOutput): any => ({
    ...obj,
  });
}

export interface ListBucketsRequest {
  /**
   * <p>The name of the bucket containing the inventory configurations to retrieve.</p>
   */
  FetchStorageInfo?: boolean;
}

export namespace ListBucketsRequest {
  export const filterSensitiveLog = (obj: ListBucketsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketSnapshotsOutput {
  /**
   * SnapshotList
   */
  Snapshot?: Snapshot[];
}

export namespace ListBucketSnapshotsOutput {
  export const filterSensitiveLog = (obj: ListBucketSnapshotsOutput): any => ({
    ...obj,
  });
}

export interface ListBucketSnapshotsRequest {
  /**
   * <p>The name of the bucket containing the objects.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;
}

export namespace ListBucketSnapshotsRequest {
  export const filterSensitiveLog = (obj: ListBucketSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface ListMetaSearchOutput {
  /**
   * 元数据查询结果
   */
  SearchResult?: string;
}

export namespace ListMetaSearchOutput {
  export const filterSensitiveLog = (obj: ListMetaSearchOutput): any => ({
    ...obj,
  });
}

export interface ListMetaSearchRequest {
  /**
   * 元数据查询条件
   */
  SearchParams: string | undefined;
}

export namespace ListMetaSearchRequest {
  export const filterSensitiveLog = (obj: ListMetaSearchRequest): any => ({
    ...obj,
  });
}

export interface MetaSearchBucket {
  /**
   * <p>The ID of the bucket.</p>
   */
  BucketId?: number;

  /**
   * <p>The name of the bucket.</p>
   */
  BucketName?: string;

  /**
   * <p>The ID of the account.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the account.</p>
   */
  AccountName?: string;
}

export namespace MetaSearchBucket {
  export const filterSensitiveLog = (obj: MetaSearchBucket): any => ({
    ...obj,
  });
}

export interface ListMetaSearchBucketsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>起始桶名</p>
   */
  BucketMarker?: string;

  /**
   * <p>起始账户ID。只在admin列举时生效，如果懈怠了bucket-marker，则必须携带该参数，可以设置为0</p>
   */
  AccountIdMarker?: string;

  /**
   * <p>The maximum number of keys returned in the response body.</p>
   */
  MaxKeys?: number;

  /**
   * <p>下一页的开始桶名</p>
   */
  NextBucketMarker?: string;

  /**
   * <p>The list of buckets owned by the requestor.</p>
   */
  Buckets?: MetaSearchBucket[];
}

export namespace ListMetaSearchBucketsOutput {
  export const filterSensitiveLog = (obj: ListMetaSearchBucketsOutput): any => ({
    ...obj,
  });
}

export interface ListMetaSearchBucketsRequest {
  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain
   *          more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>可选参数，起始桶名</p>
   */
  BucketMarker?: string;

  /**
   * <p>可选参数，起始账户ID。只在admin列举时生效，如果懈怠了bucket-marker，则必须携带该参数，可以设置为0。</p>
   */
  AccountIdMarker?: string;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;
}

export namespace ListMetaSearchBucketsRequest {
  export const filterSensitiveLog = (obj: ListMetaSearchBucketsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for all (if there are any) keys between Prefix and the next occurrence of the
 *          string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in
 *          the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter
 *          is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. </p>
 */
export interface CommonPrefix {
  /**
   * <p>Container for the specified common prefix.</p>
   */
  Prefix?: string;
}

export namespace CommonPrefix {
  export const filterSensitiveLog = (obj: CommonPrefix): any => ({
    ...obj,
  });
}

export type EncodingType = "url";

/**
 * <p>Container element that identifies who initiated the multipart upload. </p>
 */
export interface Initiator {
  /**
   * <p>If the principal is an AWS account, it provides the Canonical User ID. If the principal
   *          is an IAM User, it provides a user ARN value.</p>
   */
  ID?: string;

  /**
   * <p>Name of the Principal.</p>
   */
  DisplayName?: string;
}

export namespace Initiator {
  export const filterSensitiveLog = (obj: Initiator): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the <code>MultipartUpload</code> for the Amazon S3 object.</p>
 */
export interface MultipartUpload {
  /**
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId?: string;

  /**
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Date and time at which the multipart upload was initiated.</p>
   */
  Initiated?: Date;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Specifies the owner of the object that is part of the multipart upload. </p>
   */
  Owner?: Owner;

  /**
   * <p>Identifies who initiated the multipart upload.</p>
   */
  Initiator?: Initiator;
}

export namespace MultipartUpload {
  export const filterSensitiveLog = (obj: MultipartUpload): any => ({
    ...obj,
  });
}

export interface ListMultipartUploadsOutput {
  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket?: string;

  /**
   * <p>The key at or after which the listing began.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Upload ID after which listing began.</p>
   */
  UploadIdMarker?: string;

  /**
   * <p>When a list is truncated, this element specifies the value that should be used for the
   *          key-marker request parameter in a subsequent request.</p>
   */
  NextKeyMarker?: string;

  /**
   * <p>When a prefix is provided in the request, this field contains the specified prefix. The
   *          result contains only keys starting with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Contains the delimiter you specified in the request. If you don't specify a delimiter in
   *          your request, this element is absent from the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>When a list is truncated, this element specifies the value that should be used for the
   *             <code>upload-id-marker</code> request parameter in a subsequent request.</p>
   */
  NextUploadIdMarker?: string;

  /**
   * <p>Maximum number of multipart uploads that could have been included in the
   *          response.</p>
   */
  MaxUploads?: number;

  /**
   * <p>Indicates whether the returned list of multipart uploads is truncated. A value of true
   *          indicates that the list was truncated. The list can be truncated if the number of multipart
   *          uploads exceeds the limit allowed or specified by max uploads.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Container for elements related to a particular multipart upload. A response can contain
   *          zero or more <code>Upload</code> elements.</p>
   */
  Uploads?: MultipartUpload[];

  /**
   * <p>If you specify a delimiter in the request, then the result returns each distinct key
   *          prefix containing the delimiter in a <code>CommonPrefixes</code> element. The distinct key
   *          prefixes are returned in the <code>Prefix</code> child element.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   *          <p>If you specify <code>encoding-type</code> request parameter, Amazon S3 includes this element
   *          in the response, and returns encoded key name values in the following response
   *          elements:</p>
   *
   *          <p>
   *             <code>Delimiter</code>, <code>KeyMarker</code>, <code>Prefix</code>,
   *             <code>NextKeyMarker</code>, <code>Key</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace ListMultipartUploadsOutput {
  export const filterSensitiveLog = (obj: ListMultipartUploadsOutput): any => ({
    ...obj,
  });
}

export interface ListMultipartUploadsRequest {
  /**
   * <p>The name of the bucket to which the multipart upload was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Character you use to group keys.</p>
   *          <p>All keys that contain the same string between the prefix, if specified, and the first
   *          occurrence of the delimiter after the prefix are grouped under a single result element,
   *             <code>CommonPrefixes</code>. If you don't specify the prefix parameter, then the
   *          substring starts at the beginning of the key. The keys that are grouped under
   *             <code>CommonPrefixes</code> result element are not returned elsewhere in the
   *          response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Together with upload-id-marker, this parameter specifies the multipart upload after
   *          which listing should begin.</p>
   *          <p>If <code>upload-id-marker</code> is not specified, only the keys lexicographically
   *          greater than the specified <code>key-marker</code> will be included in the list.</p>
   *
   *          <p>If <code>upload-id-marker</code> is specified, any multipart uploads for a key equal to
   *          the <code>key-marker</code> might also be included, provided those multipart uploads have
   *          upload IDs lexicographically greater than the specified
   *          <code>upload-id-marker</code>.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response
   *          body. 1,000 is the maximum number of uploads that can be returned in a response.</p>
   */
  MaxUploads?: number;

  /**
   * <p>Lists in-progress uploads only for those keys that begin with the specified prefix. You
   *          can use prefixes to separate a bucket into different grouping of keys. (You can think of
   *          using prefix to make groups in the same way you'd use a folder in a file system.)</p>
   */
  Prefix?: string;

  /**
   * <p>Together with key-marker, specifies the multipart upload after which listing should
   *          begin. If key-marker is not specified, the upload-id-marker parameter is ignored.
   *          Otherwise, any multipart uploads for a key equal to the key-marker might be included in the
   *          list only if they have an upload ID lexicographically greater than the specified
   *             <code>upload-id-marker</code>.</p>
   */
  UploadIdMarker?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListMultipartUploadsRequest {
  export const filterSensitiveLog = (obj: ListMultipartUploadsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object consists of data and its descriptive metadata.</p>
 */
export interface _Object {
  /**
   * <p>The name that you assign to an object. You use the object key to retrieve the
   *          object.</p>
   */
  Key?: string;

  /**
   * <p>The date the Object was Last Modified</p>
   */
  LastModified?: Date;

  /**
   * <p>The entity tag is a hash of the object. The ETag reflects changes only to the contents
   *          of an object, not its metadata. The ETag may or may not be an MD5 digest of the object
   *          data. Whether or not it is depends on how the object was created and how it is encrypted as
   *          described below:</p>
   *          <ul>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the
   *                AWS Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are
   *                an MD5 digest of their object data.</p>
   *             </li>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the
   *                AWS Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are
   *                not an MD5 digest of their object data.</p>
   *             </li>
   *             <li>
   *                <p>If an object is created by either the Multipart Upload or Part Copy operation, the
   *                ETag is not an MD5 digest, regardless of the method of encryption.</p>
   *             </li>
   *          </ul>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the object</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectStorageClass | string;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  IsEncrypted?: boolean;

  /**
   * <p>对象来源</p>
   */
  ObjectSource?: string;

  /**
   * <p>对象类型，SymLink代表软链接对象</p>
   */
  Type?: string;

  /**
   * <p>恢复有效期</p>
   */
  ObjectExpirationDay?: number;

  /**
   * <p>恢复状态</p>
   */
  RestoreOnGoing?: string;

  /**
   * <p>恢复过期时间</p>
   */
  RestoredExpiryDate?: Date;

  /**
   * <p>The owner of the object</p>
   */
  Owner?: Owner;
}

export namespace _Object {
  export const filterSensitiveLog = (obj: _Object): any => ({
    ...obj,
  });
}

export interface ListObjectsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Indicates where in the bucket listing begins. Marker is included in the response if it
   *          was sent with the request.</p>
   */
  Marker?: string;

  /**
   * <p>When response is truncated (the IsTruncated element value in the response is true), you
   *          can use the key name in this field as marker in the subsequent request to get next set of
   *          objects. Amazon S3 lists objects in alphabetical order Note: This element is returned only if
   *          you have delimiter request parameter specified. If response does not include the NextMarker
   *          and it is truncated, you can use the value of the last Key in the response as the marker in
   *          the subsequent request to get the next set of object keys.</p>
   */
  NextMarker?: string;

  /**
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * <p>The bucket name.</p>
   */
  Name?: string;

  /**
   * <p>Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of
   *          the delimiter to be rolled up into a single result element in the
   *             <code>CommonPrefixes</code> collection. These rolled-up keys are not returned elsewhere
   *          in the response. Each rolled-up result counts as only one return against the
   *             <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * <p>The maximum number of keys returned in the response body.</p>
   */
  MaxKeys?: number;

  /**
   * <p>All of the keys rolled up in a common prefix count as a single return when calculating
   *          the number of returns. </p>
   *
   *          <p>A response can contain CommonPrefixes only if you specify a delimiter.</p>
   *
   *          <p>CommonPrefixes contains all (if there are any) keys between Prefix and the next
   *          occurrence of the string specified by the delimiter.</p>
   *
   *          <p> CommonPrefixes lists keys that act like subdirectories in the directory specified by
   *          Prefix.</p>
   *
   *          <p>For example, if the prefix is notes/ and the delimiter is a slash (/) as in
   *          notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a
   *          common prefix count as a single return when calculating the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace ListObjectsOutput {
  export const filterSensitiveLog = (obj: ListObjectsOutput): any => ({
    ...obj,
  });
}

export interface ListObjectsRequest {
  /**
   * <p>The name of the bucket containing the objects.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  Marker?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain more.
   *       </p>
   */
  MaxKeys?: number;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects
   *          request. Bucket owners need not specify this parameter in their requests.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListObjectsRequest {
  export const filterSensitiveLog = (obj: ListObjectsRequest): any => ({
    ...obj,
  });
}

export interface ListObjectsV2Output {
  /**
   * <p>Set to false if all of the results were returned. Set to true if more keys are available
   *          to return. If the number of results exceeds that specified by MaxKeys, all of the results
   *          might not be returned.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * <p>The bucket name.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Name?: string;

  /**
   * <p> Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of
   *          the delimiter to be rolled up into a single result element in the CommonPrefixes
   *          collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up
   *          result counts as only one return against the <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain
   *          more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating
   *          the number of returns.</p>
   *
   *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a
   *          delimiter.</p>
   *
   *          <p>
   *             <code>CommonPrefixes</code> contains all (if there are any) keys between
   *             <code>Prefix</code> and the next occurrence of the string specified by a
   *          delimiter.</p>
   *
   *          <p>
   *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory
   *          specified by <code>Prefix</code>.</p>
   *
   *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash
   *             (<code>/</code>) as in <code>notes/summer/july</code>, the common prefix is
   *             <code>notes/summer/</code>. All of the keys that roll up into a common prefix count as a
   *          single return when calculating the number of returns. </p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *
   *          <p>If you specify the encoding-type request parameter, Amazon S3 includes this element in the
   *          response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>Delimiter, Prefix, Key,</code> and <code>StartAfter</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>KeyCount is the number of keys returned with this request. KeyCount will always be less
   *          than equals to MaxKeys field. Say you ask for 50 keys, your result will include less than
   *          equals 50 keys </p>
   */
  KeyCount?: number;

  /**
   * <p> If ContinuationToken was sent with the request, it is included in the response.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which
   *          means there are more keys in the bucket that can be listed. The next list requests to Amazon S3
   *          can be continued with this <code>NextContinuationToken</code>.
   *             <code>NextContinuationToken</code> is obfuscated and is not a real key</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>If StartAfter was sent with the request, it is included in the response.</p>
   */
  StartAfter?: string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>When response is truncated (the IsTruncated element value in the response is true), you
   *          can use the key name in this field as marker in the subsequent request to get next set of
   *          objects. Amazon S3 lists objects in alphabetical order Note: This element is returned only if
   *          you have delimiter request parameter specified. If response does not include the NextMarker
   *          and it is truncated, you can use the value of the last Key in the response as the marker in
   *          the subsequent request to get the next set of object keys.</p>
   */
  NextMarker?: string;
}

export namespace ListObjectsV2Output {
  export const filterSensitiveLog = (obj: ListObjectsV2Output): any => ({
    ...obj,
  });
}

export interface ListObjectsV2Request {
  /**
   * <p>Bucket name to list. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain
   *          more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a
   *          token. ContinuationToken is obfuscated and is not a real key.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The owner field is not present in listV2 by default, if you want to return owner field
   *          with each key in the result then set the fetch owner field to true.</p>
   */
  FetchOwner?: boolean;

  /**
   * <p>StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this
   *          specified key. StartAfter can be any key in the bucket.</p>
   */
  StartAfter?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects
   *          request in V2 style. Bucket owners need not specify this parameter in their
   *          requests.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListObjectsV2Request {
  export const filterSensitiveLog = (obj: ListObjectsV2Request): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the delete marker.</p>
 */
export interface DeleteMarkerEntry {
  /**
   * <p>The account that created the delete marker.></p>
   */
  Owner?: Owner;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an
   *          object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;
}

export namespace DeleteMarkerEntry {
  export const filterSensitiveLog = (obj: DeleteMarkerEntry): any => ({
    ...obj,
  });
}

export type ObjectVersionStorageClass = "STANDARD";

/**
 * <p>The version of an object.</p>
 */
export interface ObjectVersion {
  /**
   * <p>The entity tag is an MD5 hash of that version of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the object.</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectVersionStorageClass | string;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an
   *          object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>对象类型，SymLink代表软链接对象</p>
   */
  Type?: string;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>恢复状态</p>
   */
  RestoreOnGoing?: string;

  /**
   * <p>恢复过期时间</p>
   */
  RestoredExpiryDate?: Date;

  /**
   * <p>Specifies the owner of the object.</p>
   */
  Owner?: Owner;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  IsEncrypted?: boolean;
}

export namespace ObjectVersion {
  export const filterSensitiveLog = (obj: ObjectVersion): any => ({
    ...obj,
  });
}

export interface ListObjectVersionsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria. If your results were truncated, you can make a follow-up paginated request using
   *          the NextKeyMarker and NextVersionIdMarker response parameters as a starting place in
   *          another request to return the rest of the results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Marks the last key returned in a truncated response.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Marks the last version of the key returned in a truncated response.</p>
   */
  VersionIdMarker?: string;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextKeyMarker</code> specifies the first key not returned that satisfies the
   *          search criteria. Use this value for the key-marker request parameter in a subsequent
   *          request.</p>
   */
  NextKeyMarker?: string;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextVersionIdMarker</code> specifies the first object version not returned that
   *          satisfies the search criteria. Use this value for the version-id-marker request parameter
   *          in a subsequent request.</p>
   */
  NextVersionIdMarker?: string;

  /**
   * <p>Container for version information.</p>
   */
  Versions?: ObjectVersion[];

  /**
   * <p>Container for an object that is a delete marker.</p>
   */
  DeleteMarkers?: DeleteMarkerEntry[];

  /**
   * <p>The bucket name.</p>
   */
  Name?: string;

  /**
   * <p>Selects objects that start with the value supplied by this parameter.</p>
   */
  Prefix?: string;

  /**
   * <p>The delimiter grouping the included keys. A delimiter is a character that you specify to
   *          group keys. All keys that contain the same string between the prefix and the first
   *          occurrence of the delimiter are grouped under a single result element in
   *             <code>CommonPrefixes</code>. These groups are counted as one result against the max-keys
   *          limitation. These keys are not returned elsewhere in the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Specifies the maximum number of objects to return.</p>
   */
  MaxKeys?: number;

  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating
   *          the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p> Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *
   *          <p>If you specify encoding-type request parameter, Amazon S3 includes this element in the
   *          response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>KeyMarker, NextKeyMarker, Prefix, Key</code>, and <code>Delimiter</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace ListObjectVersionsOutput {
  export const filterSensitiveLog = (obj: ListObjectVersionsOutput): any => ({
    ...obj,
  });
}

export interface ListObjectVersionsRequest {
  /**
   * <p>The bucket name that contains the objects. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character that you specify to group keys. All keys that contain the
   *          same string between the <code>prefix</code> and the first occurrence of the delimiter are
   *          grouped under a single result element in CommonPrefixes. These groups are counted as one
   *          result against the max-keys limitation. These keys are not returned elsewhere in the
   *          response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain more. If
   *          additional keys satisfy the search criteria, but were not returned because max-keys was
   *          exceeded, the response contains <isTruncated>true</isTruncated>. To return the
   *          additional keys, see key-marker and version-id-marker.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Use this parameter to select only those keys that begin with the specified prefix. You
   *          can use prefixes to separate a bucket into different groupings of keys. (You can think of
   *          using prefix to make groups in the same way you'd use a folder in a file system.) You can
   *          use prefix with delimiter to roll up numerous objects into a single result under
   *          CommonPrefixes. </p>
   */
  Prefix?: string;

  /**
   * <p>Specifies the object version you want to start listing from.</p>
   */
  VersionIdMarker?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>List Object markers in first level.</p>
   */
  DeletedObjects?: boolean;
}

export namespace ListObjectVersionsRequest {
  export const filterSensitiveLog = (obj: ListObjectVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for elements related to a part.</p>
 */
export interface Part {
  /**
   * <p>Part number identifying the part. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;

  /**
   * <p>Date and time at which the part was uploaded.</p>
   */
  LastModified?: Date;

  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the uploaded part data.</p>
   */
  Size?: number;
}

export namespace Part {
  export const filterSensitiveLog = (obj: Part): any => ({
    ...obj,
  });
}

export interface ListPartsOutput {
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete
   *          multipart uploads and the prefix in the lifecycle rule matches the object name in the
   *          request, then the response includes this header indicating when the initiated multipart
   *          upload will become eligible for abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting
   *             Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>.</p>
   *
   *          <p>The response will also include the <code>x-amz-abort-rule-id</code> header that will
   *          provide the ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It
   *          identifies applicable lifecycle configuration rule that defines the action to abort
   *          incomplete multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId?: string;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the part-number-marker request parameter in a subsequent
   *          request.</p>
   */
  PartNumberMarker?: string;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the part-number-marker request parameter in a subsequent
   *          request.</p>
   */
  NextPartNumberMarker?: string;

  /**
   * <p>Maximum number of parts that were allowed in the response.</p>
   */
  MaxParts?: number;

  /**
   * <p> Indicates whether the returned list of parts is truncated. A true value indicates that
   *          the list was truncated. A list can be truncated if the number of parts exceeds the limit
   *          returned in the MaxParts element.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p> Container for elements related to a particular part. A response can contain zero or
   *          more <code>Part</code> elements.</p>
   */
  Parts?: Part[];

  /**
   * <p>Container element that identifies who initiated the multipart upload. If the initiator
   *          is an AWS account, this element provides the same information as the <code>Owner</code>
   *          element. If the initiator is an IAM User, this element provides the user ARN and display
   *          name.</p>
   */
  Initiator?: Initiator;

  /**
   * <p> Container element that identifies the object owner, after the object is created. If
   *          multipart upload is initiated by an IAM user, this element provides the parent account ID
   *          and display name.</p>
   */
  Owner?: Owner;

  /**
   * <p>Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded
   *          object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace ListPartsOutput {
  export const filterSensitiveLog = (obj: ListPartsOutput): any => ({
    ...obj,
  });
}

export interface ListPartsRequest {
  /**
   * <p>The name of the bucket to which the parts are being uploaded. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Sets the maximum number of parts to return.</p>
   */
  MaxParts?: number;

  /**
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers
   *          will be listed.</p>
   */
  PartNumberMarker?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListPartsRequest {
  export const filterSensitiveLog = (obj: ListPartsRequest): any => ({
    ...obj,
  });
}

export interface RestoreEXRequest {
  /**
   * <p>转储或恢复后的存储级别</p>
   */
  Tier?: StorageClass | string;

  /**
   * <p>恢复后的有效期</p>
   */
  Days?: number;
}

export namespace RestoreEXRequest {
  export const filterSensitiveLog = (obj: RestoreEXRequest): any => ({
    ...obj,
  });
}

export interface PostBucketRestoreRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>参数名</p>
   */
  Key: string | undefined;

  /**
   * <p>对象版本</p>
   */
  VersionId?: string;

  /**
   * <p>配置桶统计计量配置参数</p>
   */
  RestoreEXRequest?: RestoreEXRequest;
}

export namespace PostBucketRestoreRequest {
  export const filterSensitiveLog = (obj: PostBucketRestoreRequest): any => ({
    ...obj,
  });
}

export interface PostBucketTrashRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;
}

export namespace PostBucketTrashRequest {
  export const filterSensitiveLog = (obj: PostBucketTrashRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAccelerateConfigurationRequest {
  /**
   * <p>The name of the bucket for which the accelerate configuration is set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for setting the transfer acceleration state.</p>
   */
  AccelerateConfiguration: AccelerateConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAccelerateConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAccelerateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAclRequest {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?: BucketCannedACL | string;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket to which to apply the ACL.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControlDelivered?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantReadDelivered?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAclRequest {
  export const filterSensitiveLog = (obj: PutBucketAclRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket to which an analytics configuration is stored.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
      AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
    }),
  });
}

export interface PutBucketBtsRequest {
  /**
   * <p>Specifies the bucket impacted by the <code>bts</code>configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The bucket bts as a JSON document.</p>
   */
  BtsRule: string | undefined;
}

export namespace PutBucketBtsRequest {
  export const filterSensitiveLog = (obj: PutBucketBtsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketCorsRequest {
  /**
   * <p>Specifies the bucket impacted by the <code>cors</code>configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource
   *             Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  CORSConfiguration: CORSConfiguration | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketCorsRequest {
  export const filterSensitiveLog = (obj: PutBucketCorsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketEncryptionRequest {
  /**
   * <p>Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed
   *          keys (SSE-S3) or customer master keys stored in AWS KMS (SSE-KMS). For information about
   *          the Amazon S3 default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Default Bucket Encryption</a>
   *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the server-side encryption configuration.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: PutBucketEncryptionRequest): any => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   */
  IntelligentTieringConfiguration: IntelligentTieringConfiguration | undefined;
}

export namespace PutBucketIntelligentTieringConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketIntelligentTieringConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket where the inventory configuration will be stored.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration: InventoryConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketInventoryConfigurationRequest): any => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }),
  });
}

export interface PutBucketLifecycleConfigurationRequest {
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketLifecycleConfigurationRequest): any => ({
    ...obj,
    ...(obj.LifecycleConfiguration && {
      LifecycleConfiguration: BucketLifecycleConfiguration.filterSensitiveLog(obj.LifecycleConfiguration),
    }),
  });
}

/**
 * <p>Container for logging status information.</p>
 */
export interface BucketLoggingStatus {
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
   *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *             <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

export namespace BucketLoggingStatus {
  export const filterSensitiveLog = (obj: BucketLoggingStatus): any => ({
    ...obj,
  });
}

export interface PutBucketLoggingRequest {
  /**
   * <p>The name of the bucket for which to set the logging parameters.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for logging status information.</p>
   */
  BucketLoggingStatus: BucketLoggingStatus | undefined;

  /**
   * <p>The MD5 hash of the <code>PutBucketLogging</code> request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketLoggingRequest {
  export const filterSensitiveLog = (obj: PutBucketLoggingRequest): any => ({
    ...obj,
  });
}

export enum MetadataDirective2 {
  REPLACE = "REPLACE",
  REPLACE_NEW = "REPLACE_NEW",
}

export interface PutBucketMetadataRequest {
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>元数据操作指示符。取值为 REPLACE_NEW 或 REPLACE。
   *  REPLACE_NEW 表示:对于已经存在值 的元数据进行替换，不存在值的元数据 进行赋值，未指定的元数据保持不变。
   *  REPLACE 表示:若请求中携带的 x-amz-meta-头域，将会删除指定的自定义元数据，未指定 x-amz-meta-头域 将会删除全部的自定义元数据。
   *  类型:字符串</p>
   */
  MetadataDirective?: MetadataDirective2 | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };
}

export namespace PutBucketMetadataRequest {
  export const filterSensitiveLog = (obj: PutBucketMetadataRequest): any => ({
    ...obj,
  });
}

export interface PutBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket for which the metrics configuration is set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration: MetricsConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketMetricsConfigurationRequest): any => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
      MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
    }),
  });
}

export interface PutBucketNotificationConfigurationRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A container for specifying the notification configuration of the bucket. If this element
   *          is empty, notifications are turned off for the bucket.</p>
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketNotificationConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketNotificationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketOwnershipControlsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>OwnershipControls</code> request body. </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The <code>OwnershipControls</code> (BucketOwnerPreferred or ObjectWriter) that you want
   *          to apply to this Amazon S3 bucket.</p>
   */
  OwnershipControls: OwnershipControls | undefined;
}

export namespace PutBucketOwnershipControlsRequest {
  export const filterSensitiveLog = (obj: PutBucketOwnershipControlsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketPolicyRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change
   *          this bucket policy in the future.</p>
   */
  ConfirmRemoveSelfBucketAccess?: boolean;

  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketPolicyRequest {
  export const filterSensitiveLog = (obj: PutBucketPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutBucketQoSRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The <code>GetBucketQuota</code> of bucket.</p>
   */
  QoSConfiguration?: QoSConfiguration;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketQoSRequest {
  export const filterSensitiveLog = (obj: PutBucketQoSRequest): any => ({
    ...obj,
  });
}

export interface PutBucketQuotaRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The <code>GetBucketQuota</code> of bucket.</p>
   */
  Quota?: Quota;
}

export namespace PutBucketQuotaRequest {
  export const filterSensitiveLog = (obj: PutBucketQuotaRequest): any => ({
    ...obj,
  });
}

export interface PutBucketRedundancyRequest {
  /**
   * <p>The bucket to which to apply the redundancy.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The canned redundancy to apply to the bucket.</p>
   */
  Redundancy?: string;
}

export namespace PutBucketRedundancyRequest {
  export const filterSensitiveLog = (obj: PutBucketRedundancyRequest): any => ({
    ...obj,
  });
}

export interface PutBucketReplicationRequest {
  /**
   * <p>The name of the bucket</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketReplicationRequest {
  export const filterSensitiveLog = (obj: PutBucketReplicationRequest): any => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
      ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
    }),
  });
}

/**
 * <p>Container for Payer.</p>
 */
export interface RequestPaymentConfiguration {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer: Payer | string | undefined;
}

export namespace RequestPaymentConfiguration {
  export const filterSensitiveLog = (obj: RequestPaymentConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketRequestPaymentRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for Payer.</p>
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketRequestPaymentRequest {
  export const filterSensitiveLog = (obj: PutBucketRequestPaymentRequest): any => ({
    ...obj,
  });
}

export interface PutBucketSnapshotRequest {
  /**
   * <p>The bucket to which to apply the snapshot.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Snapshot</p>
   */
  Snapshot: Snapshot | undefined;
}

export namespace PutBucketSnapshotRequest {
  export const filterSensitiveLog = (obj: PutBucketSnapshotRequest): any => ({
    ...obj,
  });
}

export interface SnapshotDescription {
  /**
   * <p>快照描述</p>
   */
  Description?: string;
}

export namespace SnapshotDescription {
  export const filterSensitiveLog = (obj: SnapshotDescription): any => ({
    ...obj,
  });
}

export interface PutBucketSnapshotDescriptionRequest {
  /**
   * <p>BucketName</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Snapshot Name</p>
   */
  Name: string | undefined;

  /**
   * <p>快照描述</p>
   */
  Snapshot?: SnapshotDescription;
}

export namespace PutBucketSnapshotDescriptionRequest {
  export const filterSensitiveLog = (obj: PutBucketSnapshotDescriptionRequest): any => ({
    ...obj,
  });
}

export interface PutBucketStatisticRequest {
  /**
   * <p>获取桶统计计量配置请求参数</p>
   */
  Bucket: string | undefined;

  /**
   * <p>配置桶统计计量配置参数</p>
   */
  StatisticConfiguration?: StatisticConfiguration;
}

export namespace PutBucketStatisticRequest {
  export const filterSensitiveLog = (obj: PutBucketStatisticRequest): any => ({
    ...obj,
  });
}

export interface PutBucketStorageClassRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The storage-class for the bucket.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace PutBucketStorageClassRequest {
  export const filterSensitiveLog = (obj: PutBucketStorageClassRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for <code>TagSet</code> elements.</p>
 */
export interface Tagging {
  /**
   * <p>A collection for a set of tags</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace Tagging {
  export const filterSensitiveLog = (obj: Tagging): any => ({
    ...obj,
  });
}

export interface PutBucketTaggingRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements.</p>
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketTaggingRequest {
  export const filterSensitiveLog = (obj: PutBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface PutBucketTrashRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>回收站配置信息</p>
   */
  Trash?: Trash;
}

export namespace PutBucketTrashRequest {
  export const filterSensitiveLog = (obj: PutBucketTrashRequest): any => ({
    ...obj,
  });
}

export interface PutBucketVersioningRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   */
  MFA?: string;

  /**
   * <p>Container for setting the versioning state.</p>
   */
  VersioningConfiguration: VersioningConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketVersioningRequest {
  export const filterSensitiveLog = (obj: PutBucketVersioningRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 */
export interface WebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: ErrorDocument;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocument?: IndexDocument;

  /**
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p>
   *          <important>
   *             <p>If you specify this property, you can't specify any other property.</p>
   *          </important>
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: RoutingRule[];
}

export namespace WebsiteConfiguration {
  export const filterSensitiveLog = (obj: WebsiteConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketWebsiteRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the request.</p>
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: PutBucketWebsiteRequest): any => ({
    ...obj,
  });
}

export interface PutDedupConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutDedupConfigurationOutput {
  export const filterSensitiveLog = (obj: PutDedupConfigurationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>开启重删的参数.</p>
 */
export interface DedupConfiguration {
  /**
   * 重删域，默认同一存储池、同一配比重删
   */
  Region?: Region | string;

  /**
   * 逐字节比较，默认关闭
   */
  CompareByte?: boolean;
}

export namespace DedupConfiguration {
  export const filterSensitiveLog = (obj: DedupConfiguration): any => ({
    ...obj,
  });
}

export interface PutDedupConfigurationRequest {
  /**
   * 开启重删功能时，重删域必选
   */
  Bucket: string | undefined;

  /**
   *
   */
  DedupConfiguration?: DedupConfiguration;
}

export namespace PutDedupConfigurationRequest {
  export const filterSensitiveLog = (obj: PutDedupConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutMetaSearchConfigurationRequest {
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  MetaSearchConfiguration?: MetaSearchConfiguration;
}

export namespace PutMetaSearchConfigurationRequest {
  export const filterSensitiveLog = (obj: PutMetaSearchConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutObjectOutput {
  /**
   * <p> If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>), the response includes this header. It
   *          includes the expiry-date and rule-id key-value pairs that provide information about object
   *          expiration. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * <p>If you specified server-side encryption either with an AWS KMS customer master key (CMK)
   *          or Amazon S3-managed encryption key in your PUT request, the response includes this header. It
   *          confirms the encryption algorithm that Amazon S3 used to encrypt the object.</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *          (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the
   *          object. </p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectOutput {
  export const filterSensitiveLog = (obj: PutObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface PutObjectRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *       ACL</a>.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>The bucket name to which the PUT operation was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p> Can be used to specify caching behavior along the request/reply chain. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1">http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1</a>.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11</a>.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13</a>.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to
   *          RFC 1864. This header can be used as a message integrity check to verify that the data is
   *          the same data that was originally sent. Although it is optional, we recommend using the
   *          Content-MD5 mechanism as an end-to-end integrity check. For more information about REST
   *          request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST
   *             Authentication</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A standard MIME type describing the format of the contents. For more information, see
   *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17</a>.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable. For more information, see
   *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21</a>.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its
   *       metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Object key for which the PUT operation was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3
   *             Service Developer Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a>.</p>
   *
   *          <p>In the following example, the request header sets the redirect to an object
   *          (anotherPage.html) in the same bucket:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
   *          </p>
   *
   *          <p>In the following example, the request header sets the object redirect to another
   *          website:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
   *          </p>
   *
   *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to Configure Website Page
   *             Redirects</a>. </p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *          (AWS KMS) symmetrical customer managed customer master key (CMK) that was used for the
   *          object.</p>
   *          <p> If the value of <code>x-amz-server-side-encryption</code> is <code>aws:kms</code>, this
   *          header specifies the ID of the symmetric customer managed AWS KMS CMK that will be used for
   *          the object. If you specify <code>x-amz-server-side-encryption:aws:kms</code>, but do not
   *             provide<code> x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the AWS
   *          managed CMK in AWS to protect the data.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this
   *          header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value
   *          pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
   *          <p>Specifying this header with a PUT operation doesn’t affect bucket-level settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For
   *          example, "Key1=Value1")</p>
   */
  Tagging?: string;

  /**
   * <p>The Object Lock mode that you want to apply to this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when you want this object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>The date and time when you want this object's WORM to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  WormRetainUntilDate?: Date;

  /**
   * <p>The date and time when you want this object's WORM to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  WormGraceUntilDate?: Date;

  /**
   * <p>Specifies whether a legal hold will be applied to this object. For more information
   *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object
   *          Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   */
  BypassRetentionTimeLimit?: boolean;
}

export namespace PutObjectRequest {
  export const filterSensitiveLog = (obj: PutObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface PutObjectAclOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectAclOutput {
  export const filterSensitiveLog = (obj: PutObjectAclOutput): any => ({
    ...obj,
  });
}

export interface PutObjectAclRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket name that contains the object to which you want to attach the ACL. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.></a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the
   *       bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Key for which the PUT operation was initiated.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectAclRequest {
  export const filterSensitiveLog = (obj: PutObjectAclRequest): any => ({
    ...obj,
  });
}

export interface PutObjectLegalHoldOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLegalHoldOutput {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldOutput): any => ({
    ...obj,
  });
}

export interface PutObjectLegalHoldRequest {
  /**
   * <p>The bucket name containing the object that you want to place a Legal Hold on. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to place a Legal Hold on.</p>
   */
  Key: string | undefined;

  /**
   * <p>Container element for the Legal Hold configuration you want to apply to the specified
   *          object.</p>
   */
  LegalHold?: ObjectLockLegalHold;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID of the object that you want to place a Legal Hold on.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectLegalHoldRequest {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldRequest): any => ({
    ...obj,
  });
}

export interface PutObjectLockConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLockConfigurationOutput {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationOutput): any => ({
    ...obj,
  });
}

export interface PutObjectLockConfigurationRequest {
  /**
   * <p>The bucket whose Object Lock configuration you want to create or replace.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The Object Lock configuration that you want to apply to the specified bucket.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectLockConfigurationRequest {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutObjectMetadataRequest {
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>元数据操作指示符。取值为 REPLACE_NEW 或 REPLACE。 REPLACE_NEW 表示:对于已经存在值 的元数据进行替换，不存在值的元数据 进行赋值，未指定的元数据保持不变。 REPLACE 表示:若请求中携带的 x-amz-meta-头域，将会删除指定的自定义元数据，未指定 x-amz-meta-头域 将会删除全部的自定义元数据。 类型:字符串</p>
   */
  MetadataDirective?: MetadataDirective2 | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;
}

export namespace PutObjectMetadataRequest {
  export const filterSensitiveLog = (obj: PutObjectMetadataRequest): any => ({
    ...obj,
  });
}

export interface PutObjectRetentionOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectRetentionOutput {
  export const filterSensitiveLog = (obj: PutObjectRetentionOutput): any => ({
    ...obj,
  });
}

export interface PutObjectRetentionRequest {
  /**
   * <p>The bucket name that contains the object you want to apply this Object Retention
   *          configuration to. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  Key: string | undefined;

  /**
   * <p>The container element for the Object Retention configuration.</p>
   */
  Retention?: ObjectLockRetention;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  VersionId?: string;

  /**
   * <p>Indicates whether this operation should bypass Governance-mode restrictions.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   */
  BypassRetentionTimeLimit?: boolean;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectRetentionRequest {
  export const filterSensitiveLog = (obj: PutObjectRetentionRequest): any => ({
    ...obj,
  });
}

export interface PutObjectSymlinkRequest {
  /**
   * <p>当前软链接名称</p>
   */
  Key: string | undefined;

  /**
   * <p>bucket name</p>
   */
  Bucket: string | undefined;

  /**
   * <p>源对象名称</p>
   */
  TargetObjectKey: string | undefined;
}

export namespace PutObjectSymlinkRequest {
  export const filterSensitiveLog = (obj: PutObjectSymlinkRequest): any => ({
    ...obj,
  });
}

export interface PutObjectTaggingOutput {
  /**
   * <p>The versionId of the object the tag-set was added to.</p>
   */
  VersionId?: string;
}

export namespace PutObjectTaggingOutput {
  export const filterSensitiveLog = (obj: PutObjectTaggingOutput): any => ({
    ...obj,
  });
}

export interface PutObjectTaggingRequest {
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be added to.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements</p>
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectTaggingRequest {
  export const filterSensitiveLog = (obj: PutObjectTaggingRequest): any => ({
    ...obj,
  });
}

export interface PutObjectWORMOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectWORMOutput {
  export const filterSensitiveLog = (obj: PutObjectWORMOutput): any => ({
    ...obj,
  });
}

export interface PutObjectWORMRequest {
  /**
   * <p>The bucket whose WORM configuration you want to create or replace.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object whose retention settings you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The WORM configuration that you want to apply to the specified bucket.</p>
   */
  WORM?: WORM;
}

export namespace PutObjectWORMRequest {
  export const filterSensitiveLog = (obj: PutObjectWORMRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Object Storage Class Policy</p>
 */
export interface OSCPConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Policies: OSCPPolicy[] | undefined;
}

export namespace OSCPConfiguration {
  export const filterSensitiveLog = (obj: OSCPConfiguration): any => ({
    ...obj,
    ...(obj.Policies && { Policies: obj.Policies.map((item) => OSCPPolicy.filterSensitiveLog(item)) }),
  });
}

export interface PutOSCPConfigurationRequest {
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  OSCPConfiguration?: OSCPConfiguration;
}

export namespace PutOSCPConfigurationRequest {
  export const filterSensitiveLog = (obj: PutOSCPConfigurationRequest): any => ({
    ...obj,
    ...(obj.OSCPConfiguration && { OSCPConfiguration: OSCPConfiguration.filterSensitiveLog(obj.OSCPConfiguration) }),
  });
}

export interface PutPublicAccessBlockRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body. </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          bucket. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: PutPublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface PutRefererRequest {
  /**
   * <p>The name of the bucket to create.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  RefererConfiguration?: RefererConfiguration;
}

export namespace PutRefererRequest {
  export const filterSensitiveLog = (obj: PutRefererRequest): any => ({
    ...obj,
  });
}

export interface PutWORMConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutWORMConfigurationOutput {
  export const filterSensitiveLog = (obj: PutWORMConfigurationOutput): any => ({
    ...obj,
  });
}

export interface PutWORMConfigurationRequest {
  /**
   * <p>The bucket whose WORM configuration you want to create or replace.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>A token to allow WORM to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The WORM configuration that you want to apply to the specified bucket.</p>
   */
  WORMConfiguration?: WORMConfiguration;
}

export namespace PutWORMConfigurationRequest {
  export const filterSensitiveLog = (obj: PutWORMConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutWORMRetainPeriodOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutWORMRetainPeriodOutput {
  export const filterSensitiveLog = (obj: PutWORMRetainPeriodOutput): any => ({
    ...obj,
  });
}

export interface PutWORMRetainPeriodRequest {
  /**
   * <p>The bucket name containing the object that you want to place a Retain Period on. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to place a Retain Period on.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID of the object that you want to place a Retain Period on.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Container element for the Retain Period configuration you want to apply to the specified
   *          object.</p>
   */
  RetainPeriod?: WORMRetainPeriod;
}

export namespace PutWORMRetainPeriodRequest {
  export const filterSensitiveLog = (obj: PutWORMRetainPeriodRequest): any => ({
    ...obj,
  });
}

export interface RestoreBucketObjs {
  /**
   * <p>恢复对象的结果/p>
   */
  Restored?: DeletedObject[];

  /**
   * <p>Container for a failed delete operation that describes the object that Amazon S3 attempted to
   *          delete and the error it encountered.</p>
   */
  Errors?: _Error[];
}

export namespace RestoreBucketObjs {
  export const filterSensitiveLog = (obj: RestoreBucketObjs): any => ({
    ...obj,
  });
}

export interface RestoreBucketObjsTrashOutput {
  /**
   * <p>恢复对象的结果/p>
   */
  RestoreResult?: RestoreBucketObjs;
}

export namespace RestoreBucketObjsTrashOutput {
  export const filterSensitiveLog = (obj: RestoreBucketObjsTrashOutput): any => ({
    ...obj,
  });
}

export type BucketTrashPolicy = "overwrite" | "skip";

export interface BucketObjsTrashInfo {
  Policy?: BucketTrashPolicy | string;
  /**
   * <p>The objects to delete.</p>
   */
  Objects: BucketTrashObj[] | undefined;

  /**
   * <p>Element to enable quiet mode for the request. When you add this element, you must set
   *          its value to true.</p>
   */
  Quiet?: boolean;
}

export namespace BucketObjsTrashInfo {
  export const filterSensitiveLog = (obj: BucketObjsTrashInfo): any => ({
    ...obj,
  });
}

export interface RestoreBucketObjsTrashRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>对象信息</p>
   */
  Restore: BucketObjsTrashInfo | undefined;
}

export namespace RestoreBucketObjsTrashRequest {
  export const filterSensitiveLog = (obj: RestoreBucketObjsTrashRequest): any => ({
    ...obj,
  });
}

export interface RestoreBucketObjTrashRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>当前软链接名称</p>
   */
  Key: string | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token: string | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Policy: BucketTrashPolicy | string | undefined;
}

export namespace RestoreBucketObjTrashRequest {
  export const filterSensitiveLog = (obj: RestoreBucketObjTrashRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This operation is not allowed against this storage tier.</p>
 */
export interface ObjectAlreadyInActiveTierError extends __SmithyException, $MetadataBearer {
  name: "ObjectAlreadyInActiveTierError";
  $fault: "client";
}

export namespace ObjectAlreadyInActiveTierError {
  export const filterSensitiveLog = (obj: ObjectAlreadyInActiveTierError): any => ({
    ...obj,
  });
}

export interface RestoreObjectOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Indicates the path in the provided S3 output location where Select results will be
   *          restored to.</p>
   */
  RestoreOutputPath?: string;
}

export namespace RestoreObjectOutput {
  export const filterSensitiveLog = (obj: RestoreObjectOutput): any => ({
    ...obj,
  });
}

export type Tier = "Bulk" | "Expedited" | "Standard";

/**
 * <p>Container for S3 Glacier job parameters.</p>
 */
export interface GlacierJobParameters {
  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier: Tier | string | undefined;
}

export namespace GlacierJobParameters {
  export const filterSensitiveLog = (obj: GlacierJobParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the type of server-side encryption used.</p>
 */
export interface Encryption {
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  EncryptionType: ServerSideEncryption | string | undefined;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value specifies the ID of
   *          the symmetric customer managed AWS KMS CMK to use for encryption of job results. Amazon S3 only
   *          supports symmetric CMKs. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and
   *             Asymmetric Keys</a> in the <i>AWS Key Management Service Developer
   *             Guide</i>.</p>
   */
  KMSKeyId?: string;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value can be used to
   *          specify the encryption context for the restore results.</p>
   */
  KMSContext?: string;
}

export namespace Encryption {
  export const filterSensitiveLog = (obj: Encryption): any => ({
    ...obj,
    ...(obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p>A metadata key-value pair to store with an object.</p>
 */
export interface MetadataEntry {
  /**
   * <p>Name of the Object.</p>
   */
  Name?: string;

  /**
   * <p>Value of the Object.</p>
   */
  Value?: string;
}

export namespace MetadataEntry {
  export const filterSensitiveLog = (obj: MetadataEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon S3 location that will receive the results of the restore request.</p>
 */
export interface S3Location {
  /**
   * <p>The name of the bucket where the restore results will be placed.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>The prefix that is prepended to the restore results for this request.</p>
   */
  Prefix: string | undefined;

  /**
   * <p>Contains the type of server-side encryption used.</p>
   */
  Encryption?: Encryption;

  /**
   * <p>The canned ACL to apply to the restore results.</p>
   */
  CannedACL?: ObjectCannedACL | string;

  /**
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Grant[];

  /**
   * <p>The tag-set that is applied to the restore results.</p>
   */
  Tagging?: Tagging;

  /**
   * <p>A list of metadata to store with the restore results in S3.</p>
   */
  UserMetadata?: MetadataEntry[];

  /**
   * <p>The class of storage used to store the restore results.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
    ...(obj.Encryption && { Encryption: Encryption.filterSensitiveLog(obj.Encryption) }),
  });
}

/**
 * <p>Describes the location where the restore job's output is stored.</p>
 */
export interface OutputLocation {
  /**
   * <p>Describes an S3 location that will receive the results of the restore request.</p>
   */
  S3?: S3Location;
}

export namespace OutputLocation {
  export const filterSensitiveLog = (obj: OutputLocation): any => ({
    ...obj,
    ...(obj.S3 && { S3: S3Location.filterSensitiveLog(obj.S3) }),
  });
}

export type ExpressionType = "SQL";

export type CompressionType = "BZIP2" | "GZIP" | "NONE";

export enum FileHeaderInfo {
  IGNORE = "IGNORE",
  NONE = "NONE",
  USE = "USE",
}

/**
 * <p>Describes how an uncompressed comma-separated values (CSV)-formatted input object is
 *          formatted.</p>
 */
export interface CSVInput {
  /**
   * <p>Describes the first line of input. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: First line is not a header.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IGNORE</code>: First line is a header, but you can't use the header values
   *                to indicate the column in an expression. You can use column position (such as _1, _2,
   *                …) to indicate the column (<code>SELECT s._1 FROM OBJECT s</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Use</code>: First line is a header, and you can use the header value to
   *                identify a column in an expression (<code>SELECT "name" FROM OBJECT</code>). </p>
   *             </li>
   *          </ul>
   */
  FileHeaderInfo?: FileHeaderInfo | string;

  /**
   * <p>A single character used to indicate that a row should be ignored when the character is
   *          present at the start of that row. You can specify any character to indicate a comment
   *          line.</p>
   */
  Comments?: string;

  /**
   * <p>A single character used for escaping the quotation mark character inside an already
   *          escaped value. For example, the value """ a , b """ is parsed as " a , b ".</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A single character used to separate individual records in the input. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;

  /**
   * <p>A single character used to separate individual fields in a record. You can specify an
   *          arbitrary delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   *          <p>Type: String</p>
   *          <p>Default: <code>"</code>
   *          </p>
   *          <p>Ancestors: <code>CSV</code>
   *          </p>
   */
  QuoteCharacter?: string;

  /**
   * <p>Specifies that CSV field values may contain quoted record delimiters and such records
   *          should be allowed. Default value is FALSE. Setting this value to TRUE may lower
   *          performance.</p>
   */
  AllowQuotedRecordDelimiter?: boolean;
}

export namespace CSVInput {
  export const filterSensitiveLog = (obj: CSVInput): any => ({
    ...obj,
  });
}

export enum JSONType {
  DOCUMENT = "DOCUMENT",
  LINES = "LINES",
}

/**
 * <p>Specifies JSON as object's input serialization format.</p>
 */
export interface JSONInput {
  /**
   * <p>The type of JSON. Valid values: Document, Lines.</p>
   */
  Type?: JSONType | string;
}

export namespace JSONInput {
  export const filterSensitiveLog = (obj: JSONInput): any => ({
    ...obj,
  });
}

/**
 * <p>Container for Parquet.</p>
 */
export interface ParquetInput {}

export namespace ParquetInput {
  export const filterSensitiveLog = (obj: ParquetInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the serialization format of the object.</p>
 */
export interface InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  CSV?: CSVInput;

  /**
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value:
   *          NONE.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   */
  JSON?: JSONInput;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   */
  Parquet?: ParquetInput;
}

export namespace InputSerialization {
  export const filterSensitiveLog = (obj: InputSerialization): any => ({
    ...obj,
  });
}

export enum QuoteFields {
  ALWAYS = "ALWAYS",
  ASNEEDED = "ASNEEDED",
}

/**
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are
 *          formatted.</p>
 */
export interface CSVOutput {
  /**
   * <p>Indicates whether to use quotation marks around output fields. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALWAYS</code>: Always use quotation marks for output fields.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASNEEDED</code>: Use quotation marks for output fields when needed.</p>
   *             </li>
   *          </ul>
   */
  QuoteFields?: QuoteFields | string;

  /**
   * <p>The single character used for escaping the quote character inside an already escaped
   *          value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A single character used to separate individual records in the output. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;

  /**
   * <p>The value used to separate individual fields in a record. You can specify an arbitrary
   *          delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   */
  QuoteCharacter?: string;
}

export namespace CSVOutput {
  export const filterSensitiveLog = (obj: CSVOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies JSON as request's output serialization format.</p>
 */
export interface JSONOutput {
  /**
   * <p>The value used to separate individual records in the output. If no value is specified,
   *          Amazon S3 uses a newline character ('\n').</p>
   */
  RecordDelimiter?: string;
}

export namespace JSONOutput {
  export const filterSensitiveLog = (obj: JSONOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes how results of the Select job are serialized.</p>
 */
export interface OutputSerialization {
  /**
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   */
  CSV?: CSVOutput;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   */
  JSON?: JSONOutput;
}

export namespace OutputSerialization {
  export const filterSensitiveLog = (obj: OutputSerialization): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the parameters for Select job types.</p>
 */
export interface SelectParameters {
  /**
   * <p>Describes the serialization format of the object.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * <p>Describes how the results of the Select job are serialized.</p>
   */
  OutputSerialization: OutputSerialization | undefined;
}

export namespace SelectParameters {
  export const filterSensitiveLog = (obj: SelectParameters): any => ({
    ...obj,
  });
}

export enum RestoreRequestType {
  SELECT = "SELECT",
}

/**
 * <p>Container for restore job parameters.</p>
 */
export interface RestoreRequest {
  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *          requests.</p>
   */
  Days?: number;

  /**
   * <p>S3 Glacier related parameters pertaining to this job. Do not use with restores that
   *          specify <code>OutputLocation</code>.</p>
   */
  GlacierJobParameters?: GlacierJobParameters;

  /**
   * <p>Type of restore request.</p>
   */
  Type?: RestoreRequestType | string;

  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier?: Tier | string;

  /**
   * <p>The optional description for the job.</p>
   */
  Description?: string;

  /**
   * <p>Describes the parameters for Select job types.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   */
  OutputLocation?: OutputLocation;
}

export namespace RestoreRequest {
  export const filterSensitiveLog = (obj: RestoreRequest): any => ({
    ...obj,
    ...(obj.OutputLocation && { OutputLocation: OutputLocation.filterSensitiveLog(obj.OutputLocation) }),
  });
}

export interface RestoreObjectRequest {
  /**
   * <p>The bucket name containing the object to restore. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the operation was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Container for restore job parameters.</p>
   */
  RestoreRequest?: RestoreRequest;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace RestoreObjectRequest {
  export const filterSensitiveLog = (obj: RestoreObjectRequest): any => ({
    ...obj,
    ...(obj.RestoreRequest && { RestoreRequest: RestoreRequest.filterSensitiveLog(obj.RestoreRequest) }),
  });
}

/**
 * <p></p>
 */
export interface ContinuationEvent {}

export namespace ContinuationEvent {
  export const filterSensitiveLog = (obj: ContinuationEvent): any => ({
    ...obj,
  });
}

/**
 * <p>A message that indicates the request is complete and no more messages will be sent. You
 *          should not assume that the request is complete until the client receives an
 *             <code>EndEvent</code>.</p>
 */
export interface EndEvent {}

export namespace EndEvent {
  export const filterSensitiveLog = (obj: EndEvent): any => ({
    ...obj,
  });
}

/**
 * <p>This data type contains information about progress of an operation.</p>
 */
export interface Progress {
  /**
   * <p>The current number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * <p>The current number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * <p>The current number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}

export namespace Progress {
  export const filterSensitiveLog = (obj: Progress): any => ({
    ...obj,
  });
}

/**
 * <p>This data type contains information about the progress event of an operation.</p>
 */
export interface ProgressEvent {
  /**
   * <p>The Progress event details.</p>
   */
  Details?: Progress;
}

export namespace ProgressEvent {
  export const filterSensitiveLog = (obj: ProgressEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the records event.</p>
 */
export interface RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records.</p>
   */
  Payload?: Uint8Array;
}

export namespace RecordsEvent {
  export const filterSensitiveLog = (obj: RecordsEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the stats details.</p>
 */
export interface Stats {
  /**
   * <p>The total number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * <p>The total number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}

export namespace Stats {
  export const filterSensitiveLog = (obj: Stats): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the Stats Event.</p>
 */
export interface StatsEvent {
  /**
   * <p>The Stats event details.</p>
   */
  Details?: Stats;
}

export namespace StatsEvent {
  export const filterSensitiveLog = (obj: StatsEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The container for selecting objects from a content event stream.</p>
 */
export type SelectObjectContentEventStream =
  | SelectObjectContentEventStream.ContMember
  | SelectObjectContentEventStream.EndMember
  | SelectObjectContentEventStream.ProgressMember
  | SelectObjectContentEventStream.RecordsMember
  | SelectObjectContentEventStream.StatsMember
  | SelectObjectContentEventStream.$UnknownMember;

export namespace SelectObjectContentEventStream {
  /**
   * <p>The Records Event.</p>
   */
  export interface RecordsMember {
    Records: RecordsEvent;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stats Event.</p>
   */
  export interface StatsMember {
    Records?: never;
    Stats: StatsEvent;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Progress Event.</p>
   */
  export interface ProgressMember {
    Records?: never;
    Stats?: never;
    Progress: ProgressEvent;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Continuation Event.</p>
   */
  export interface ContMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont: ContinuationEvent;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The End Event.</p>
   */
  export interface EndMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End: EndEvent;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Records: (value: RecordsEvent) => T;
    Stats: (value: StatsEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    End: (value: EndEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelectObjectContentEventStream, visitor: Visitor<T>): T => {
    if (value.Records !== undefined) return visitor.Records(value.Records);
    if (value.Stats !== undefined) return visitor.Stats(value.Stats);
    if (value.Progress !== undefined) return visitor.Progress(value.Progress);
    if (value.Cont !== undefined) return visitor.Cont(value.Cont);
    if (value.End !== undefined) return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: SelectObjectContentEventStream): any => {
    if (obj.Records !== undefined) return { Records: RecordsEvent.filterSensitiveLog(obj.Records) };
    if (obj.Stats !== undefined) return { Stats: StatsEvent.filterSensitiveLog(obj.Stats) };
    if (obj.Progress !== undefined) return { Progress: ProgressEvent.filterSensitiveLog(obj.Progress) };
    if (obj.Cont !== undefined) return { Cont: ContinuationEvent.filterSensitiveLog(obj.Cont) };
    if (obj.End !== undefined) return { End: EndEvent.filterSensitiveLog(obj.End) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface SelectObjectContentOutput {
  /**
   * <p>The array of results.</p>
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream>;
}

export namespace SelectObjectContentOutput {
  export const filterSensitiveLog = (obj: SelectObjectContentOutput): any => ({
    ...obj,
    ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
  });
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be
 *          sent.</p>
 */
export interface RequestProgress {
  /**
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE,
   *          FALSE. Default value: FALSE.</p>
   */
  Enabled?: boolean;
}

export namespace RequestProgress {
  export const filterSensitiveLog = (obj: RequestProgress): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed
 *          when its first byte is contained by the range. This parameter is optional, but when
 *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
 *          start and end of the range.</p>
 */
export interface ScanRange {
  /**
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is 0. If only start is supplied, it means scan
   *          from that point to the end of the file.For example;
   *             <code><scanrange><start>50</start></scanrange></code> means scan
   *          from byte 50 until the end of the file.</p>
   */
  Start?: number;

  /**
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is one less than the size of the object being
   *          queried. If only the End parameter is supplied, it is interpreted to mean scan the last N
   *          bytes of the file. For example,
   *             <code><scanrange><end>50</end></scanrange></code> means scan the
   *          last 50 bytes.</p>
   */
  End?: number;
}

export namespace ScanRange {
  export const filterSensitiveLog = (obj: ScanRange): any => ({
    ...obj,
  });
}

/**
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query
 *          Language (SQL) statement. In the request, along with the SQL expression, you must specify a
 *          data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data
 *          into records. It returns only records that match the specified SQL expression. You must
 *          also specify the data serialization format for the response. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
 */
export interface SelectObjectContentRequest {
  /**
   * <p>The S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The SSE Algorithm used to encrypt the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>The SSE Customer Key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKey?: string;

  /**
   * <p>The SSE Customer Key MD5. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>Specifies if periodic request progress information should be enabled.</p>
   */
  RequestProgress?: RequestProgress;

  /**
   * <p>Describes the format of the data in the object that is being queried.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * <p>Specifies the byte range of the object to get the records from. A record is processed
   *          when its first byte is contained by the range. This parameter is optional, but when
   *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
   *          start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code>
   *                - process only the records starting between the bytes 50 and 100 (inclusive, counting
   *                from zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> -
   *                process only the records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> -
   *                process only the records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   */
  ScanRange?: ScanRange;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace SelectObjectContentRequest {
  export const filterSensitiveLog = (obj: SelectObjectContentRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

export interface UpdateAgentConfigOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace UpdateAgentConfigOutput {
  export const filterSensitiveLog = (obj: UpdateAgentConfigOutput): any => ({
    ...obj,
  });
}

export interface UpdateAgentConfigRequest {
  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The bucket bts as a JSON document.</p>
   */
  AgentConfig: string | undefined;
}

export namespace UpdateAgentConfigRequest {
  export const filterSensitiveLog = (obj: UpdateAgentConfigRequest): any => ({
    ...obj,
  });
}

export interface UploadPartOutput {
  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace UploadPartOutput {
  export const filterSensitiveLog = (obj: UploadPartOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface UploadPartRequest {
  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated
   *          when using the command from the CLI. This parameter is required if object lock parameters
   *          are specified.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being uploaded. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm header</code>. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace UploadPartRequest {
  export const filterSensitiveLog = (obj: UploadPartRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyPartResult {
  /**
   * <p>Entity tag of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   */
  LastModified?: Date;
}

export namespace CopyPartResult {
  export const filterSensitiveLog = (obj: CopyPartResult): any => ({
    ...obj,
  });
}

export interface UploadPartCopyOutput {
  /**
   * <p>The version of the source object that was copied, if you have enabled versioning on the
   *          source bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * <p>Container for all response elements.</p>
   */
  CopyPartResult?: CopyPartResult;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace UploadPartCopyOutput {
  export const filterSensitiveLog = (obj: UploadPartCopyOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface UploadPartCopyRequest {
  /**
   * <p>The bucket name.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the source object for the copy operation. You specify the value in one of two
   *          formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">access
   *          point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source
   *                bucket and key of the source object, separated by a slash (/). For example, to copy
   *                the object <code>reports/january.pdf</code> from the bucket
   *                   <code>awsexamplebucket</code>, use
   *                   <code>awsexamplebucket/reports/january.pdf</code>. The value must be URL
   *                encoded.</p>
   *             </li>
   *             <li>
   *                <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p>
   *                <note>
   *                   <p>Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same AWS Region.</p>
   *                </note>
   *                <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL encoded.  </p>
   *             </li>
   *          </ul>
   *          <p>To copy a specific version of an object, append <code>?versionId=<version-id></code>
   *          to the value (for example,
   *             <code>awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>).
   *          If you don't specify a version ID, Amazon S3 copies the latest version of the source
   *          object.</p>
   */
  CopySource: string | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   */
  CopySourceIfMatch?: string;

  /**
   * <p>Copies the object if it has been modified since the specified time.</p>
   */
  CopySourceIfModifiedSince?: Date;

  /**
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   */
  CopySourceIfNoneMatch?: string;

  /**
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   */
  CopySourceIfUnmodifiedSince?: Date;

  /**
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *          bytes=first-last, where the first and last are the zero-based byte offsets to copy. For
   *          example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You
   *          can copy a range only if the source object is greater than 5 MB.</p>
   */
  CopySourceRange?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being copied. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *          AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source
   *          object. The encryption key provided in this header must be one that was used when the
   *          source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedSourceBucketOwner?: string;
}

export namespace UploadPartCopyRequest {
  export const filterSensitiveLog = (obj: UploadPartCopyRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
  });
}
