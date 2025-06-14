import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "../commands/AbortMultipartUploadCommand";
import { BatchRestoreObjectCommandInput, BatchRestoreObjectCommandOutput } from "../commands/BatchRestoreObjectCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "../commands/CompleteMultipartUploadCommand";
import { CopyObjectCommandInput, CopyObjectCommandOutput } from "../commands/CopyObjectCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "../commands/CreateBucketCommand";
import {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "../commands/CreateMultipartUploadCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import {
  CreateSnapshotPolicyCommandInput,
  CreateSnapshotPolicyCommandOutput,
} from "../commands/CreateSnapshotPolicyCommand";
import { DedupstatCommandInput, DedupstatCommandOutput } from "../commands/DedupstatCommand";
import { DeleteAgentsCommandInput, DeleteAgentsCommandOutput } from "../commands/DeleteAgentsCommand";
import { DeleteBucketAdrCommandInput, DeleteBucketAdrCommandOutput } from "../commands/DeleteBucketAdrCommand";
import {
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "../commands/DeleteBucketAnalyticsConfigurationCommand";
import { DeleteBucketBtsCommandInput, DeleteBucketBtsCommandOutput } from "../commands/DeleteBucketBtsCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "../commands/DeleteBucketCommand";
import {
  DeleteBucketCompressionConfigurationCommandInput,
  DeleteBucketCompressionConfigurationCommandOutput,
} from "../commands/DeleteBucketCompressionConfigurationCommand";
import { DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput } from "../commands/DeleteBucketCorsCommand";
import { DeleteBucketDedupCommandInput, DeleteBucketDedupCommandOutput } from "../commands/DeleteBucketDedupCommand";
import {
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "../commands/DeleteBucketEncryptionCommand";
import {
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "../commands/DeleteBucketInventoryConfigurationCommand";
import {
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "../commands/DeleteBucketLifecycleCommand";
import {
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "../commands/DeleteBucketMetricsConfigurationCommand";
import {
  DeleteBucketObjTrashCommandInput,
  DeleteBucketObjTrashCommandOutput,
} from "../commands/DeleteBucketObjTrashCommand";
import {
  DeleteBucketObjsTrashCommandInput,
  DeleteBucketObjsTrashCommandOutput,
} from "../commands/DeleteBucketObjsTrashCommand";
import {
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "../commands/DeleteBucketOwnershipControlsCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "../commands/DeleteBucketPolicyCommand";
import { DeleteBucketQoSCommandInput, DeleteBucketQoSCommandOutput } from "../commands/DeleteBucketQoSCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "../commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketSnapshotCommandInput,
  DeleteBucketSnapshotCommandOutput,
} from "../commands/DeleteBucketSnapshotCommand";
import {
  DeleteBucketSnapshotsCommandInput,
  DeleteBucketSnapshotsCommandOutput,
} from "../commands/DeleteBucketSnapshotsCommand";
import {
  DeleteBucketStatisticCommandInput,
  DeleteBucketStatisticCommandOutput,
} from "../commands/DeleteBucketStatisticCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "../commands/DeleteBucketTaggingCommand";
import { DeleteBucketTrashCommandInput, DeleteBucketTrashCommandOutput } from "../commands/DeleteBucketTrashCommand";
import {
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "../commands/DeleteBucketWebsiteCommand";
import { DeleteMetaSearchCommandInput, DeleteMetaSearchCommandOutput } from "../commands/DeleteMetaSearchCommand";
import { DeleteOSCPCommandInput, DeleteOSCPCommandOutput } from "../commands/DeleteOSCPCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "../commands/DeleteObjectCommand";
import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "../commands/DeleteObjectTaggingCommand";
import { DeleteObjectsCommandInput, DeleteObjectsCommandOutput } from "../commands/DeleteObjectsCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "../commands/DeletePublicAccessBlockCommand";
import { DeleteRefererCommandInput, DeleteRefererCommandOutput } from "../commands/DeleteRefererCommand";
import { DeleteSingleAgentCommandInput, DeleteSingleAgentCommandOutput } from "../commands/DeleteSingleAgentCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "../commands/DeleteSnapshotCommand";
import {
  DeleteSnapshotPolicyCommandInput,
  DeleteSnapshotPolicyCommandOutput,
} from "../commands/DeleteSnapshotPolicyCommand";
import { DeleteSnapshotsCommandInput, DeleteSnapshotsCommandOutput } from "../commands/DeleteSnapshotsCommand";
import { GetAgentConfigCommandInput, GetAgentConfigCommandOutput } from "../commands/GetAgentConfigCommand";
import { GetAgentPathConfigCommandInput, GetAgentPathConfigCommandOutput } from "../commands/GetAgentPathConfigCommand";
import {
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "../commands/GetBucketAccelerateConfigurationCommand";
import { GetBucketAclCommandInput, GetBucketAclCommandOutput } from "../commands/GetBucketAclCommand";
import { GetBucketAdrCommandInput, GetBucketAdrCommandOutput } from "../commands/GetBucketAdrCommand";
import {
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "../commands/GetBucketAnalyticsConfigurationCommand";
import { GetBucketBtsCommandInput, GetBucketBtsCommandOutput } from "../commands/GetBucketBtsCommand";
import {
  GetBucketCompressionConfigurationCommandInput,
  GetBucketCompressionConfigurationCommandOutput,
} from "../commands/GetBucketCompressionConfigurationCommand";
import { GetBucketCorsCommandInput, GetBucketCorsCommandOutput } from "../commands/GetBucketCorsCommand";
import {
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "../commands/GetBucketEncryptionCommand";
import {
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/GetBucketIntelligentTieringConfigurationCommand";
import {
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "../commands/GetBucketInventoryConfigurationCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "../commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput } from "../commands/GetBucketLocationCommand";
import { GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput } from "../commands/GetBucketLoggingCommand";
import {
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "../commands/GetBucketMetricsConfigurationCommand";
import {
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "../commands/GetBucketNotificationConfigurationCommand";
import { GetBucketOverviewCommandInput, GetBucketOverviewCommandOutput } from "../commands/GetBucketOverviewCommand";
import {
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "../commands/GetBucketOwnershipControlsCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "../commands/GetBucketPolicyCommand";
import {
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "../commands/GetBucketPolicyStatusCommand";
import { GetBucketQoSCommandInput, GetBucketQoSCommandOutput } from "../commands/GetBucketQoSCommand";
import { GetBucketQuotaCommandInput, GetBucketQuotaCommandOutput } from "../commands/GetBucketQuotaCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "../commands/GetBucketReplicationCommand";
import {
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "../commands/GetBucketRequestPaymentCommand";
import { GetBucketSnapshotCommandInput, GetBucketSnapshotCommandOutput } from "../commands/GetBucketSnapshotCommand";
import { GetBucketStatisticCommandInput, GetBucketStatisticCommandOutput } from "../commands/GetBucketStatisticCommand";
import {
  GetBucketStorageInfoCommandInput,
  GetBucketStorageInfoCommandOutput,
} from "../commands/GetBucketStorageInfoCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "../commands/GetBucketTaggingCommand";
import { GetBucketTrashCommandInput, GetBucketTrashCommandOutput } from "../commands/GetBucketTrashCommand";
import {
  GetBucketTrashObjListCommandInput,
  GetBucketTrashObjListCommandOutput,
} from "../commands/GetBucketTrashObjListCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "../commands/GetBucketVersioningCommand";
import { GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput } from "../commands/GetBucketWebsiteCommand";
import {
  GetOSCPConfigurationCommandInput,
  GetOSCPConfigurationCommandOutput,
} from "../commands/GetOSCPConfigurationCommand";
import { GetObjectAclCommandInput, GetObjectAclCommandOutput } from "../commands/GetObjectAclCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "../commands/GetObjectCommand";
import { GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput } from "../commands/GetObjectLegalHoldCommand";
import {
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "../commands/GetObjectLockConfigurationCommand";
import { GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput } from "../commands/GetObjectRetentionCommand";
import { GetObjectSymlinkCommandInput, GetObjectSymlinkCommandOutput } from "../commands/GetObjectSymlinkCommand";
import { GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput } from "../commands/GetObjectTaggingCommand";
import { GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput } from "../commands/GetObjectTorrentCommand";
import { GetObjectWORMCommandInput, GetObjectWORMCommandOutput } from "../commands/GetObjectWORMCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "../commands/GetPublicAccessBlockCommand";
import { GetRefererCommandInput, GetRefererCommandOutput } from "../commands/GetRefererCommand";
import { GetSnapshotInfoCommandInput, GetSnapshotInfoCommandOutput } from "../commands/GetSnapshotInfoCommand";
import { GetSnapshotPolicyCommandInput, GetSnapshotPolicyCommandOutput } from "../commands/GetSnapshotPolicyCommand";
import { GetSnapshotsCommandInput, GetSnapshotsCommandOutput } from "../commands/GetSnapshotsCommand";
import {
  GetWORMConfigurationCommandInput,
  GetWORMConfigurationCommandOutput,
} from "../commands/GetWORMConfigurationCommand";
import {
  GetWORMRetainPeriodCommandInput,
  GetWORMRetainPeriodCommandOutput,
} from "../commands/GetWORMRetainPeriodCommand";
import { HeadBucketCommandInput, HeadBucketCommandOutput } from "../commands/HeadBucketCommand";
import { HeadBucketObjTrashCommandInput, HeadBucketObjTrashCommandOutput } from "../commands/HeadBucketObjTrashCommand";
import { HeadObjectCommandInput, HeadObjectCommandOutput } from "../commands/HeadObjectCommand";
import {
  IdentityAuthenticationConfigCommandInput,
  IdentityAuthenticationConfigCommandOutput,
} from "../commands/IdentityAuthenticationConfigCommand";
import {
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "../commands/ListBucketAnalyticsConfigurationsCommand";
import {
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "../commands/ListBucketIntelligentTieringConfigurationsCommand";
import {
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "../commands/ListBucketInventoryConfigurationsCommand";
import {
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "../commands/ListBucketMetricsConfigurationsCommand";
import {
  ListBucketSnapshotObjectCommandInput,
  ListBucketSnapshotObjectCommandOutput,
} from "../commands/ListBucketSnapshotObjectCommand";
import {
  ListBucketSnapshotsCommandInput,
  ListBucketSnapshotsCommandOutput,
} from "../commands/ListBucketSnapshotsCommand";
import { ListBucketsCommandInput, ListBucketsCommandOutput } from "../commands/ListBucketsCommand";
import {
  ListMetaSearchBucketsCommandInput,
  ListMetaSearchBucketsCommandOutput,
} from "../commands/ListMetaSearchBucketsCommand";
import { ListMetaSearchCommandInput, ListMetaSearchCommandOutput } from "../commands/ListMetaSearchCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "../commands/ListMultipartUploadsCommand";
import { ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput } from "../commands/ListObjectVersionsCommand";
import { ListObjectsCommandInput, ListObjectsCommandOutput } from "../commands/ListObjectsCommand";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "../commands/ListObjectsV2Command";
import { ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import { MozObjectsCommandInput, MozObjectsCommandOutput } from "../commands/MozObjectsCommand";
import { PostBucketRestoreCommandInput, PostBucketRestoreCommandOutput } from "../commands/PostBucketRestoreCommand";
import { PostBucketTrashCommandInput, PostBucketTrashCommandOutput } from "../commands/PostBucketTrashCommand";
import {
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "../commands/PutBucketAccelerateConfigurationCommand";
import { PutBucketAclCommandInput, PutBucketAclCommandOutput } from "../commands/PutBucketAclCommand";
import { PutBucketAdrCommandInput, PutBucketAdrCommandOutput } from "../commands/PutBucketAdrCommand";
import {
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "../commands/PutBucketAnalyticsConfigurationCommand";
import { PutBucketBtsCommandInput, PutBucketBtsCommandOutput } from "../commands/PutBucketBtsCommand";
import {
  PutBucketCompressionConfigurationCommandInput,
  PutBucketCompressionConfigurationCommandOutput,
} from "../commands/PutBucketCompressionConfigurationCommand";
import { PutBucketCorsCommandInput, PutBucketCorsCommandOutput } from "../commands/PutBucketCorsCommand";
import {
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "../commands/PutBucketEncryptionCommand";
import {
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/PutBucketIntelligentTieringConfigurationCommand";
import {
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "../commands/PutBucketInventoryConfigurationCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "../commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput } from "../commands/PutBucketLoggingCommand";
import { PutBucketMetadataCommandInput, PutBucketMetadataCommandOutput } from "../commands/PutBucketMetadataCommand";
import {
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "../commands/PutBucketMetricsConfigurationCommand";
import {
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "../commands/PutBucketNotificationConfigurationCommand";
import {
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "../commands/PutBucketOwnershipControlsCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "../commands/PutBucketPolicyCommand";
import { PutBucketQoSCommandInput, PutBucketQoSCommandOutput } from "../commands/PutBucketQoSCommand";
import { PutBucketQuotaCommandInput, PutBucketQuotaCommandOutput } from "../commands/PutBucketQuotaCommand";
import {
  PutBucketRedundancyCommandInput,
  PutBucketRedundancyCommandOutput,
} from "../commands/PutBucketRedundancyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "../commands/PutBucketReplicationCommand";
import {
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "../commands/PutBucketRequestPaymentCommand";
import { PutBucketSnapshotCommandInput, PutBucketSnapshotCommandOutput } from "../commands/PutBucketSnapshotCommand";
import {
  PutBucketSnapshotDescriptionCommandInput,
  PutBucketSnapshotDescriptionCommandOutput,
} from "../commands/PutBucketSnapshotDescriptionCommand";
import { PutBucketStatisticCommandInput, PutBucketStatisticCommandOutput } from "../commands/PutBucketStatisticCommand";
import {
  PutBucketStorageClassCommandInput,
  PutBucketStorageClassCommandOutput,
} from "../commands/PutBucketStorageClassCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "../commands/PutBucketTaggingCommand";
import { PutBucketTrashCommandInput, PutBucketTrashCommandOutput } from "../commands/PutBucketTrashCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "../commands/PutBucketVersioningCommand";
import { PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput } from "../commands/PutBucketWebsiteCommand";
import {
  PutDedupConfigurationCommandInput,
  PutDedupConfigurationCommandOutput,
} from "../commands/PutDedupConfigurationCommand";
import {
  PutMetaSearchConfigurationCommandInput,
  PutMetaSearchConfigurationCommandOutput,
} from "../commands/PutMetaSearchConfigurationCommand";
import {
  PutOSCPConfigurationCommandInput,
  PutOSCPConfigurationCommandOutput,
} from "../commands/PutOSCPConfigurationCommand";
import { PutObjectAclCommandInput, PutObjectAclCommandOutput } from "../commands/PutObjectAclCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "../commands/PutObjectCommand";
import { PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput } from "../commands/PutObjectLegalHoldCommand";
import {
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "../commands/PutObjectLockConfigurationCommand";
import { PutObjectMetadataCommandInput, PutObjectMetadataCommandOutput } from "../commands/PutObjectMetadataCommand";
import { PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput } from "../commands/PutObjectRetentionCommand";
import { PutObjectSymlinkCommandInput, PutObjectSymlinkCommandOutput } from "../commands/PutObjectSymlinkCommand";
import { PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput } from "../commands/PutObjectTaggingCommand";
import { PutObjectWORMCommandInput, PutObjectWORMCommandOutput } from "../commands/PutObjectWORMCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "../commands/PutPublicAccessBlockCommand";
import { PutRefererCommandInput, PutRefererCommandOutput } from "../commands/PutRefererCommand";
import {
  PutWORMConfigurationCommandInput,
  PutWORMConfigurationCommandOutput,
} from "../commands/PutWORMConfigurationCommand";
import {
  PutWORMRetainPeriodCommandInput,
  PutWORMRetainPeriodCommandOutput,
} from "../commands/PutWORMRetainPeriodCommand";
import {
  RestoreBucketObjTrashCommandInput,
  RestoreBucketObjTrashCommandOutput,
} from "../commands/RestoreBucketObjTrashCommand";
import {
  RestoreBucketObjsTrashCommandInput,
  RestoreBucketObjsTrashCommandOutput,
} from "../commands/RestoreBucketObjsTrashCommand";
import { RestoreObjectCommandInput, RestoreObjectCommandOutput } from "../commands/RestoreObjectCommand";
import { RollbackSnapshotCommandInput, RollbackSnapshotCommandOutput } from "../commands/RollbackSnapshotCommand";
import {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "../commands/SelectObjectContentCommand";
import { UpdateAgentConfigCommandInput, UpdateAgentConfigCommandOutput } from "../commands/UpdateAgentConfigCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "../commands/UpdateSnapshotCommand";
import { UploadPartCommandInput, UploadPartCommandOutput } from "../commands/UploadPartCommand";
import { UploadPartCopyCommandInput, UploadPartCopyCommandOutput } from "../commands/UploadPartCopyCommand";
import {
  AbortIncompleteMultipartUpload,
  AccelerateConfiguration,
  AccessControlPolicy,
  AccessControlTranslation,
  AdrCacheConfiguration,
  AdrRule,
  AnalyticsAndOperator,
  AnalyticsConfiguration,
  AnalyticsExportDestination,
  AnalyticsFilter,
  AnalyticsS3BucketDestination,
  ArchiveDirectReadConfiguration,
  BatchRestoreRequest,
  BtsConfiguration,
  Bucket,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  BucketDedupConfiguration,
  BucketLifecycleConfiguration,
  BucketLoggingConfiguration,
  BucketOSCPConfiguration,
  BucketRedundancyConfiguration,
  BucketTrashObj,
  CORSConfiguration,
  CORSRule,
  CompletedMultipartUpload,
  CompletedPart,
  CompressionConfiguration,
  CompressionConfigurations,
  CompressionRule,
  CopyObjectResult,
  CreateBucketConfiguration,
  DedupStatReq,
  DefaultRetention,
  Delete,
  DeleteMarkerReplication,
  DeletedObject,
  Destination,
  DomainNames,
  EncryptionConfiguration,
  Event,
  ExistingObjectReplication,
  FilterRule,
  GetBucketStorageInfoResult,
  Grant,
  Grantee,
  IntelligentTieringAndOperator,
  IntelligentTieringConfiguration,
  IntelligentTieringFilter,
  InventoryConfiguration,
  InventoryDestination,
  InventoryEncryption,
  InventoryFilter,
  InventoryOptionalField,
  InventoryS3BucketDestination,
  InventorySchedule,
  LambdaFunctionConfiguration,
  LifecycleAndRuleOperator,
  LifecycleExpiration,
  LifecycleOrRuleOperator,
  LifecyclePeriod,
  LifecycleRule,
  LifecycleRuleFilter,
  LifecycleRunningTimes,
  ListBucketResult,
  LoggingEnabled,
  MetaSearchConfiguration,
  Metrics,
  MetricsAndOperator,
  MetricsConfiguration,
  MetricsFilter,
  Mode,
  NoSuchUpload,
  NoncurrentVersionExpiration,
  NoncurrentVersionTransition,
  NotOrCompressFilter,
  NotificationConfiguration,
  NotificationConfigurationFilter,
  ObjectAlreadyInActiveTierError,
  ObjectIdentifier,
  ObjectLockConfiguration,
  ObjectLockRule,
  ObjectNotInActiveTierError,
  ObjectSizeRange,
  Owner,
  OwnershipControls,
  OwnershipControlsRule,
  PolicyConfiguration,
  PolicySourceGroup,
  PolicyStatus,
  PrefixOrSuffix,
  QoSConfiguration,
  QueueConfiguration,
  Quota,
  RefererConfiguration,
  RefererList,
  RepPairConfiguration,
  ReplicaModifications,
  ReplicationConfiguration,
  ReplicationRule,
  ReplicationRuleAndOperator,
  ReplicationRuleFilter,
  ReplicationTime,
  ReplicationTimeValue,
  Restore,
  RestoreExpiration,
  S3KeyFilter,
  SSEKMS,
  SSES3,
  ServerSideEncryptionByDefault,
  ServerSideEncryptionConfiguration,
  ServerSideEncryptionRule,
  Snapshot,
  SnapshotDelete,
  SnapshotIdentifier,
  SnapshotPolicy,
  SnapshotPolicyPeriod,
  SourceSelectionCriteria,
  SseKmsEncryptedObjects,
  Stat,
  StatisticConfiguration,
  StorageClassAnalysis,
  StorageClassAnalysisDataExport,
  StorageClassStatisticsList,
  StringTypeListAgentDirectoryResult,
  Tag,
  TagMultiInOrMode,
  TaggingConfiguration,
  TargetGrant,
  Tiering,
  TopicConfiguration,
  TransferOrRestoreBucketName,
  Transition,
  Trash,
  TrashConfiguration,
  VersioningConfiguration,
  _Error,
} from "../models/models_0";
import {
  BucketCompressionConfiguration,
  BucketLoggingStatus,
  BucketObjsTrashInfo,
  CSVInput,
  CSVOutput,
  CommonPrefix,
  Compress,
  Condition,
  ContinuationEvent,
  CopyPartResult,
  DedupConfiguration,
  DeleteMarkerEntry,
  Encryption,
  EndEvent,
  ErrorDocument,
  GlacierJobParameters,
  IndexDocument,
  Initiator,
  InputSerialization,
  InvalidObjectState,
  JSONInput,
  JSONOutput,
  ListBucketAllSnapshotResult,
  ListBucketSnapshotObjectResult,
  ListBucketTrashResult,
  MetaSearchBucket,
  MetadataEntry,
  MultipartUpload,
  NoSuchBucket,
  NoSuchKey,
  OSCPConfiguration,
  OSCPPolicy,
  OSCPPolicyAndRuleOperator,
  OSCPPolicyFilter,
  OSCPPolicyOrRuleOperator,
  ObjectLockLegalHold,
  ObjectLockRetention,
  ObjectVersion,
  OutputLocation,
  OutputSerialization,
  ParquetInput,
  Part,
  ProgressEvent,
  PublicAccessBlockConfiguration,
  RecordsEvent,
  Redirect,
  RedirectAllRequestsTo,
  RequestPaymentConfiguration,
  RequestProgress,
  RestoreEXRequest,
  RestoreRequest,
  RoutingRule,
  S3Location,
  ScanRange,
  SelectObjectContentEventStream,
  SelectParameters,
  SnapshotDescription,
  StatsEvent,
  Tagging,
  UserMetadataSingle,
  WORM,
  WORMConfiguration,
  WORMDefaultRetention,
  WORMRetainPeriod,
  WORMRule,
  WebsiteConfiguration,
  _Object,
} from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  dateToUtcString as __dateToUtcString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { XMLParser } from "fast-xml-parser";

export const serializeAws_restXmlAbortMultipartUploadCommand = async (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "AbortMultipartUpload",
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlBatchRestoreObjectCommand = async (
  input: BatchRestoreObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    restore: "",
  };
  let body: any;
  let contents: any;
  if (input.Restore !== undefined) {
    contents = serializeAws_restXmlRestore(input.Restore, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlCompleteMultipartUploadCommand = async (
  input: CompleteMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  let contents: any;
  if (input.MultipartUpload !== undefined) {
    contents = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
    contents = contents.withName("CompleteMultipartUpload");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlCopyObjectCommand = async (
  input: CopyObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.WormRetainUntilDate) && {
      "x-amz-worm-retain-until-date": (input.WormRetainUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(isSerializableHeaderValue(input.WormGraceUntilDate) && {
      "x-amz-worm-grace-until-date": (input.WormGraceUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.ContentDisposition) && { "content-disposition": input.ContentDisposition! }),
    ...(isSerializableHeaderValue(input.ContentEncoding) && { "content-encoding": input.ContentEncoding! }),
    ...(isSerializableHeaderValue(input.ContentLanguage) && { "content-language": input.ContentLanguage! }),
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.CopySource) && { "x-amz-copy-source": input.CopySource! }),
    ...(isSerializableHeaderValue(input.CopySourceIfMatch) && {
      "x-amz-copy-source-if-match": input.CopySourceIfMatch!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfModifiedSince) && {
      "x-amz-copy-source-if-modified-since": __dateToUtcString(input.CopySourceIfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfNoneMatch) && {
      "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince) && {
      "x-amz-copy-source-if-unmodified-since": __dateToUtcString(input.CopySourceIfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.Expires) && { expires: __dateToUtcString(input.Expires!).toString() }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.MetadataDirective) && { "x-amz-metadata-directive": input.MetadataDirective! }),
    ...(isSerializableHeaderValue(input.TaggingDirective) && { "x-amz-tagging-directive": input.TaggingDirective! }),
    ...(isSerializableHeaderValue(input.ServerSideEncryption) && {
      "x-amz-server-side-encryption": input.ServerSideEncryption!,
    }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.GlacierConfiguration) && {
      "x-amz-glacier-configuration": input.GlacierConfiguration!,
    }),
    ...(isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
      "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSKeyId) && {
      "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
      "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    }),
    ...(isSerializableHeaderValue(input.BucketKeyEnabled) && {
      "x-amz-server-side-encryption-bucket-key-enabled": input.BucketKeyEnabled!.toString(),
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerAlgorithm) && {
      "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKey) && {
      "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKeyMD5) && {
      "x-amz-copy-source-server-side-encryption-customer-key-md5": input.CopySourceSSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging! }),
    ...(isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode! }),
    ...(isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
      "x-amz-object-lock-retain-until-date": (
        input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z"
      ).toString(),
    }),
    ...(isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
      "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedSourceBucketOwner) && {
      "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.BypassRetentionTimeLimit) && {
      "x-amz-bypass-retention-time-limit": input.BypassRetentionTimeLimit!.toString(),
    }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce(
        (acc: any, suffix: string) => ({
          ...acc,
          [`x-amz-meta-${suffix.toLowerCase()}`]: input.Metadata![suffix],
        }),
        {}
      )),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "CopyObject",
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlCreateBucketCommand = async (
  input: CreateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.EnableDedup) && { "x-amz-enable-dedup": input.EnableDedup!.toString() }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.EncryptionMode) && {
      "x-amz-encryption-mode": input.EncryptionMode!.toString(),
    }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.ObjectLockEnabledForBucket) && {
      "x-amz-bucket-object-lock-enabled": input.ObjectLockEnabledForBucket!.toString(),
    }),
    ...(isSerializableHeaderValue(input.PolicyMode) && { "x-amz-policy-mode": input.PolicyMode! }),
    ...(isSerializableHeaderValue(input.Redundancy) && { "x-amz-redundancy": input.Redundancy! }),
    ...(isSerializableHeaderValue(input.StoragePoolId) && { "x-amz-pool-id": input.StoragePoolId! }),
    ...(isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging! }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-default-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.GlacierConfiguration) && {
      "x-amz-glacier-configuration": input.GlacierConfiguration!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  let body: any;
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restXmlCreateMultipartUploadCommand = async (
  input: CreateMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.ContentDisposition) && { "content-disposition": input.ContentDisposition! }),
    ...(isSerializableHeaderValue(input.ContentEncoding) && { "content-encoding": input.ContentEncoding! }),
    ...(isSerializableHeaderValue(input.ContentLanguage) && { "content-language": input.ContentLanguage! }),
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.Expires) && { expires: __dateToUtcString(input.Expires!).toString() }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.ServerSideEncryption) && {
      "x-amz-server-side-encryption": input.ServerSideEncryption!,
    }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.GlacierConfiguration) && {
      "x-amz-glacier-configuration": input.GlacierConfiguration!,
    }),
    ...(isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
      "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSKeyId) && {
      "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
      "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    }),
    ...(isSerializableHeaderValue(input.BucketKeyEnabled) && {
      "x-amz-server-side-encryption-bucket-key-enabled": input.BucketKeyEnabled!.toString(),
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging! }),
    ...(isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode! }),
    ...(isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
      "x-amz-object-lock-retain-until-date": (
        input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z"
      ).toString(),
    }),
    ...(isSerializableHeaderValue(input.WormRetainUntilDate) && {
      "x-amz-worm-retain-until-date": (input.WormRetainUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(isSerializableHeaderValue(input.WormGraceUntilDate) && {
      "x-amz-worm-grace-until-date": (input.WormGraceUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
      "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce(
        (acc: any, suffix: string) => ({
          ...acc,
          [`x-amz-meta-${suffix.toLowerCase()}`]: input.Metadata![suffix],
        }),
        {}
      )),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    uploads: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlCreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "createSnapshot",
  };
  let body: any;
  let contents: any;
  if (input.Snapshot !== undefined) {
    contents = serializeAws_restXmlSnapshot(input.Snapshot, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlCreateSnapshotPolicyCommand = async (
  input: CreateSnapshotPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "createPolicy",
  };
  let body: any;
  let contents: any;
  if (input.SnapshotPolicy !== undefined) {
    contents = serializeAws_restXmlSnapshotPolicy(input.SnapshotPolicy, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDedupstatCommand = async (
  input: DedupstatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/";
  const query: any = {
    dedupstat: "",
  };
  let body: any;
  let contents: any;
  if (input.DedupStatReq !== undefined) {
    contents = serializeAws_restXmlDedupStatReq(input.DedupStatReq, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteAgentsCommand = async (
  input: DeleteAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
  };
  let resolvedPath = "/";
  const query: any = {
    agent: "",
    ...(input.action !== undefined && { action: input.action }),
  };
  let body: any;
  let contents: any;
  if (input.AgentList !== undefined) {
    contents = input.AgentList;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketCommand = async (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketAdrCommand = async (
  input: DeleteBucketAdrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    archivedirectread: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = async (
  input: DeleteBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketBtsCommand = async (
  input: DeleteBucketBtsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    bts: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketCompressionConfigurationCommand = async (
  input: DeleteBucketCompressionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    compression: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketCorsCommand = async (
  input: DeleteBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    cors: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketDedupCommand = async (
  input: DeleteBucketDedupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    dedup: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketEncryptionCommand = async (
  input: DeleteBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    encryption: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = async (
  input: DeleteBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "intelligent-tiering": "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketInventoryConfigurationCommand = async (
  input: DeleteBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketLifecycleCommand = async (
  input: DeleteBucketLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    lifecycle: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketMetricsConfigurationCommand = async (
  input: DeleteBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketObjsTrashCommand = async (
  input: DeleteBucketObjsTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    trash: "",
    action: "delete",
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
  };
  let body: any;
  let contents: any;
  if (input.Delete !== undefined) {
    contents = serializeAws_restXmlDelete(input.Delete, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketObjTrashCommand = async (
  input: DeleteBucketObjTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    trash: "",
    action: "delete",
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketOwnershipControlsCommand = async (
  input: DeleteBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ownershipControls: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketPolicyCommand = async (
  input: DeleteBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policy: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketQoSCommand = async (
  input: DeleteBucketQoSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    qos: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketReplicationCommand = async (
  input: DeleteBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    replication: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketSnapshotCommand = async (
  input: DeleteBucketSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot1: "",
    ...(input.Name !== undefined && { "snapshot-name": input.Name }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketSnapshotsCommand = async (
  input: DeleteBucketSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
  };
  let body: any;
  let contents: any;
  if (input.Delete !== undefined) {
    contents = serializeAws_restXmlSnapshotDelete(input.Delete, context);
    contents = contents.withName("Delete");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketStatisticCommand = async (
  input: DeleteBucketStatisticCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    statistic: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketTaggingCommand = async (
  input: DeleteBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    tagging: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketTrashCommand = async (
  input: DeleteBucketTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    trash: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteBucketWebsiteCommand = async (
  input: DeleteBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    website: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteMetaSearchCommand = async (
  input: DeleteMetaSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metasearch: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.MFA) && { "x-amz-mfa": input.MFA! }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.BypassGovernanceRetention) && {
      "x-amz-bypass-governance-retention": input.BypassGovernanceRetention!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "DeleteObject",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteObjectsCommand = async (
  input: DeleteObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.MFA) && { "x-amz-mfa": input.MFA! }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.BypassGovernanceRetention) && {
      "x-amz-bypass-governance-retention": input.BypassGovernanceRetention!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    delete: "",
  };
  let body: any;
  let contents: any;
  if (input.Delete !== undefined) {
    contents = serializeAws_restXmlDelete(input.Delete, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteObjectTaggingCommand = async (
  input: DeleteObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    tagging: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteOSCPCommand = async (
  input: DeleteOSCPCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    oscp: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeletePublicAccessBlockCommand = async (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    publicAccessBlock: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteRefererCommand = async (
  input: DeleteRefererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    referer: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteSingleAgentCommand = async (
  input: DeleteSingleAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/";
  const query: any = {
    agent: "",
    ...(input.name !== undefined && { name: input.name }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "deleteSnapshot",
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteSnapshotPolicyCommand = async (
  input: DeleteSnapshotPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "deletePolicy",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlDeleteSnapshotsCommand = async (
  input: DeleteSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "delete",
  };
  let body: any;
  let contents: any;
  if (input.Delete !== undefined) {
    contents = serializeAws_restXmlSnapshotDelete(input.Delete, context);
    contents = contents.withName("Delete");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetAgentConfigCommand = async (
  input: GetAgentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/";
  const query: any = {
    agent: "",
    ...(input.name !== undefined && { name: input.name }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetAgentPathConfigCommand = async (
  input: GetAgentPathConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/";
  const query: any = {
    agent: "",
    action: "getDirector",
    ...(input.name !== undefined && { name: input.name }),
    ...(input.ip !== undefined && { ip: input.ip }),
    ...(input.marker !== undefined && { marker: input.marker }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketAccelerateConfigurationCommand = async (
  input: GetBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    accelerate: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketAclCommand = async (
  input: GetBucketAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    acl: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketAdrCommand = async (
  input: GetBucketAdrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    archivedirectread: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketAnalyticsConfigurationCommand = async (
  input: GetBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    "x-id": "GetBucketAnalyticsConfiguration",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketBtsCommand = async (
  input: GetBucketBtsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    bts: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketCompressionConfigurationCommand = async (
  input: GetBucketCompressionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    compression: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketCorsCommand = async (
  input: GetBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    cors: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketEncryptionCommand = async (
  input: GetBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    encryption: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = async (
  input: GetBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "intelligent-tiering": "",
    "x-id": "GetBucketIntelligentTieringConfiguration",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketInventoryConfigurationCommand = async (
  input: GetBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    "x-id": "GetBucketInventoryConfiguration",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (
  input: GetBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    lifecycle: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketLocationCommand = async (
  input: GetBucketLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    location: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketLoggingCommand = async (
  input: GetBucketLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    logging: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketMetricsConfigurationCommand = async (
  input: GetBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    "x-id": "GetBucketMetricsConfiguration",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketNotificationConfigurationCommand = async (
  input: GetBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    notification: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketOverviewCommand = async (
  input: GetBucketOverviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    overview: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketOwnershipControlsCommand = async (
  input: GetBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ownershipControls: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketPolicyCommand = async (
  input: GetBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policy: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketPolicyStatusCommand = async (
  input: GetBucketPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policyStatus: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketQoSCommand = async (
  input: GetBucketQoSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    qos: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketQuotaCommand = async (
  input: GetBucketQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    quota: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketReplicationCommand = async (
  input: GetBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    replication: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketRequestPaymentCommand = async (
  input: GetBucketRequestPaymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    requestPayment: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketSnapshotCommand = async (
  input: GetBucketSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot1: "",
    ...(input.Name !== undefined && { "snapshot-name": input.Name }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketStatisticCommand = async (
  input: GetBucketStatisticCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    statistic: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketStorageInfoCommand = async (
  input: GetBucketStorageInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    storageinfo: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketTaggingCommand = async (
  input: GetBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    tagging: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketTrashCommand = async (
  input: GetBucketTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    trash: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketTrashObjListCommand = async (
  input: GetBucketTrashObjListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    trash: "",
    action: "list",
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.OrderType !== undefined && { "order-type": input.OrderType }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.BeginTime !== undefined && {
      "begin-time": (input.BeginTime.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketVersioningCommand = async (
  input: GetBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    versioning: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetBucketWebsiteCommand = async (
  input: GetBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    website: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
    ...(isSerializableHeaderValue(input.IfModifiedSince) && {
      "if-modified-since": __dateToUtcString(input.IfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.IfNoneMatch) && { "if-none-match": input.IfNoneMatch! }),
    ...(isSerializableHeaderValue(input.IfUnmodifiedSince) && {
      "if-unmodified-since": __dateToUtcString(input.IfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.Range) && { range: input.Range! }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "GetObject",
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
    ...(input.ResponseCacheControl !== undefined && { "response-cache-control": input.ResponseCacheControl }),
    ...(input.ResponseContentDisposition !== undefined && {
      "response-content-disposition": input.ResponseContentDisposition,
    }),
    ...(input.ResponseContentEncoding !== undefined && { "response-content-encoding": input.ResponseContentEncoding }),
    ...(input.ResponseContentLanguage !== undefined && { "response-content-language": input.ResponseContentLanguage }),
    ...(input.ResponseContentType !== undefined && { "response-content-type": input.ResponseContentType }),
    ...(input.ResponseExpires !== undefined && {
      "response-expires": (input.ResponseExpires.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectAclCommand = async (
  input: GetObjectAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    acl: "",
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectLegalHoldCommand = async (
  input: GetObjectLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "legal-hold": "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectLockConfigurationCommand = async (
  input: GetObjectLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "object-lock": "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectRetentionCommand = async (
  input: GetObjectRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    retention: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectSymlinkCommand = async (
  input: GetObjectSymlinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.SymlinkCheck) && {
      "x-amz-meta-symlink-check": input.SymlinkCheck!.toString(),
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    symlink: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectTaggingCommand = async (
  input: GetObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    tagging: "",
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectTorrentCommand = async (
  input: GetObjectTorrentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    torrent: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetObjectWORMCommand = async (
  input: GetObjectWORMCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    worm: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetOSCPConfigurationCommand = async (
  input: GetOSCPConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    oscp: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetPublicAccessBlockCommand = async (
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    publicAccessBlock: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetRefererCommand = async (
  input: GetRefererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    referer: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetSnapshotInfoCommand = async (
  input: GetSnapshotInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "getSnapshotInfo",
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetSnapshotPolicyCommand = async (
  input: GetSnapshotPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "getPolicy",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetSnapshotsCommand = async (
  input: GetSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "listAllSnapshot",
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetWORMConfigurationCommand = async (
  input: GetWORMConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    worm: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlGetWORMRetainPeriodCommand = async (
  input: GetWORMRetainPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "retain-period": "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlHeadBucketCommand = async (
  input: HeadBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.WithoutContentLength) && {
      "x-amz-without-content-length": input.WithoutContentLength!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restXmlHeadBucketObjTrashCommand = async (
  input: HeadBucketObjTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.WithoutContentLength) && {
      "x-amz-without-content-length": input.WithoutContentLength!.toString(),
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    trash: "",
    action: "head",
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlHeadObjectCommand = async (
  input: HeadObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
    ...(isSerializableHeaderValue(input.IfModifiedSince) && {
      "if-modified-since": __dateToUtcString(input.IfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.IfNoneMatch) && { "if-none-match": input.IfNoneMatch! }),
    ...(isSerializableHeaderValue(input.IfUnmodifiedSince) && {
      "if-unmodified-since": __dateToUtcString(input.IfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.Range) && { range: input.Range! }),
    ...(isSerializableHeaderValue(input.WithoutContentLength) && {
      "x-amz-without-content-length": input.WithoutContentLength!.toString(),
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.WithErrorInfo) && { "x-amz-with-errinfo": input.WithErrorInfo!.toString() }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
    ...(input.FetchEncryptionType !== undefined && { "fetch-encryption-type": input.FetchEncryptionType.toString() }),
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlIdentityAuthenticationConfigCommand = async (
  input: IdentityAuthenticationConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
  };
  let resolvedPath = "/";
  const query: any = {
    agent: "",
    action: "auth",
  };
  let body: any;
  let contents: any;
  if (input.IdentityAuthConfig !== undefined) {
    contents = input.IdentityAuthConfig;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListBucketAnalyticsConfigurationsCommand = async (
  input: ListBucketAnalyticsConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    "x-id": "ListBucketAnalyticsConfigurations",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = async (
  input: ListBucketIntelligentTieringConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "intelligent-tiering": "",
    "x-id": "ListBucketIntelligentTieringConfigurations",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListBucketInventoryConfigurationsCommand = async (
  input: ListBucketInventoryConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    "x-id": "ListBucketInventoryConfigurations",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListBucketMetricsConfigurationsCommand = async (
  input: ListBucketMetricsConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    "x-id": "ListBucketMetricsConfigurations",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListBucketsCommand = async (
  input: ListBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/";
  const query: any = {
    ...(input.FetchStorageInfo !== undefined && { "fetch-storageinfo": input.FetchStorageInfo.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListBucketSnapshotObjectCommand = async (
  input: ListBucketSnapshotObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "listObject",
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListBucketSnapshotsCommand = async (
  input: ListBucketSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListMetaSearchCommand = async (
  input: ListMetaSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "text/plain",
  };
  let resolvedPath = "/";
  const query: any = {
    metasearch: "",
  };
  let body: any;
  let contents: any;
  if (input.SearchParams !== undefined) {
    contents = input.SearchParams;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListMetaSearchBucketsCommand = async (
  input: ListMetaSearchBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/";
  const query: any = {
    listmetasearch: "",
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.BucketMarker !== undefined && { "bucket-marker": input.BucketMarker }),
    ...(input.AccountIdMarker !== undefined && { "account-id-marker": input.AccountIdMarker }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListMultipartUploadsCommand = async (
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    uploads: "",
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
    ...(input.KeyMarker !== undefined && { "key-marker": input.KeyMarker }),
    ...(input.MaxUploads !== undefined && { "max-uploads": input.MaxUploads.toString() }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.UploadIdMarker !== undefined && { "upload-id-marker": input.UploadIdMarker }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListObjectsCommand = async (
  input: ListObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListObjectsV2Command = async (
  input: ListObjectsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "list-type": "2",
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
    ...(input.FetchOwner !== undefined && { "fetch-owner": input.FetchOwner.toString() }),
    ...(input.StartAfter !== undefined && { "start-after": input.StartAfter }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListObjectVersionsCommand = async (
  input: ListObjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.DeletedObjects) && {
      "x-amz-deleted-objects": input.DeletedObjects!.toString(),
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    versions: "",
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
    ...(input.KeyMarker !== undefined && { "key-marker": input.KeyMarker }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.VersionIdMarker !== undefined && { "version-id-marker": input.VersionIdMarker }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlListPartsCommand = async (
  input: ListPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "ListParts",
    ...(input.MaxParts !== undefined && { "max-parts": input.MaxParts.toString() }),
    ...(input.PartNumberMarker !== undefined && { "part-number-marker": input.PartNumberMarker }),
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlMozObjectsCommand = async (
  input: MozObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.Moz) && { "x-amz-moz": input.Moz!.toString() }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    moz: "",
  };
  let body: any;
  let contents: any;
  if (input.Compress !== undefined) {
    contents = serializeAws_restXmlCompress(input.Compress, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPostBucketRestoreCommand = async (
  input: PostBucketRestoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    restoreex: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.RestoreEXRequest !== undefined) {
    contents = serializeAws_restXmlRestoreEXRequest(input.RestoreEXRequest, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPostBucketTrashCommand = async (
  input: PostBucketTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    trash: "",
    action: "cleanup",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketAccelerateConfigurationCommand = async (
  input: PutBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    accelerate: "",
  };
  let body: any;
  let contents: any;
  if (input.AccelerateConfiguration !== undefined) {
    contents = serializeAws_restXmlAccelerateConfiguration(input.AccelerateConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketAclCommand = async (
  input: PutBucketAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.GrantFullControlDelivered) && {
      "x-amz-grant-full-control-delivered": input.GrantFullControlDelivered!,
    }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadDelivered) && {
      "x-amz-grant-read-delivered": input.GrantReadDelivered!,
    }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    acl: "",
  };
  let body: any;
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketAdrCommand = async (
  input: PutBucketAdrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    archivedirectread: "",
  };
  let body: any;
  let contents: any;
  if (input.ArchiveDirectReadConfiguration !== undefined) {
    contents = serializeAws_restXmlArchiveDirectReadConfiguration(input.ArchiveDirectReadConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketAnalyticsConfigurationCommand = async (
  input: PutBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  let contents: any;
  if (input.AnalyticsConfiguration !== undefined) {
    contents = serializeAws_restXmlAnalyticsConfiguration(input.AnalyticsConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketBtsCommand = async (
  input: PutBucketBtsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    bts: "",
  };
  let body: any;
  let contents: any;
  if (input.BtsRule !== undefined) {
    contents = input.BtsRule;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketCompressionConfigurationCommand = async (
  input: PutBucketCompressionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    compression: "",
  };
  let body: any;
  let contents: any;
  if (input.CompressionConfiguration !== undefined) {
    contents = serializeAws_restXmlBucketCompressionConfiguration(input.CompressionConfiguration, context);
    contents = contents.withName("CompressionConfiguration");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketCorsCommand = async (
  input: PutBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    cors: "",
  };
  let body: any;
  let contents: any;
  if (input.CORSConfiguration !== undefined) {
    contents = serializeAws_restXmlCORSConfiguration(input.CORSConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketEncryptionCommand = async (
  input: PutBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    encryption: "",
  };
  let body: any;
  let contents: any;
  if (input.ServerSideEncryptionConfiguration !== undefined) {
    contents = serializeAws_restXmlServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = async (
  input: PutBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "intelligent-tiering": "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  let contents: any;
  if (input.IntelligentTieringConfiguration !== undefined) {
    contents = serializeAws_restXmlIntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketInventoryConfigurationCommand = async (
  input: PutBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  let contents: any;
  if (input.InventoryConfiguration !== undefined) {
    contents = serializeAws_restXmlInventoryConfiguration(input.InventoryConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (
  input: PutBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    lifecycle: "",
  };
  let body: any;
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = serializeAws_restXmlBucketLifecycleConfiguration(input.LifecycleConfiguration, context);
    contents = contents.withName("LifecycleConfiguration");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketLoggingCommand = async (
  input: PutBucketLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    logging: "",
  };
  let body: any;
  let contents: any;
  if (input.BucketLoggingStatus !== undefined) {
    contents = serializeAws_restXmlBucketLoggingStatus(input.BucketLoggingStatus, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketMetadataCommand = async (
  input: PutBucketMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.MetadataDirective) && { "x-amz-metadata-directive": input.MetadataDirective! }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce(
        (acc: any, suffix: string) => ({
          ...acc,
          [`x-amz-meta-${suffix.toLowerCase()}`]: input.Metadata![suffix],
        }),
        {}
      )),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metadata: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketMetricsConfigurationCommand = async (
  input: PutBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  let contents: any;
  if (input.MetricsConfiguration !== undefined) {
    contents = serializeAws_restXmlMetricsConfiguration(input.MetricsConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketNotificationConfigurationCommand = async (
  input: PutBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    notification: "",
  };
  let body: any;
  let contents: any;
  if (input.NotificationConfiguration !== undefined) {
    contents = serializeAws_restXmlNotificationConfiguration(input.NotificationConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketOwnershipControlsCommand = async (
  input: PutBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ownershipControls: "",
  };
  let body: any;
  let contents: any;
  if (input.OwnershipControls !== undefined) {
    contents = serializeAws_restXmlOwnershipControls(input.OwnershipControls, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketPolicyCommand = async (
  input: PutBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess) && {
      "x-amz-confirm-remove-self-bucket-access": input.ConfirmRemoveSelfBucketAccess!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policy: "",
  };
  let body: any;
  let contents: any;
  if (input.Policy !== undefined) {
    contents = input.Policy;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketQoSCommand = async (
  input: PutBucketQoSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    qos: "",
  };
  let body: any;
  let contents: any;
  if (input.QoSConfiguration !== undefined) {
    contents = serializeAws_restXmlQoSConfiguration(input.QoSConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketQuotaCommand = async (
  input: PutBucketQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    quota: "",
  };
  let body: any;
  let contents: any;
  if (input.Quota !== undefined) {
    contents = serializeAws_restXmlQuota(input.Quota, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketRedundancyCommand = async (
  input: PutBucketRedundancyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.Redundancy) && { "x-amz-redundancy": input.Redundancy! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    redundancy: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketReplicationCommand = async (
  input: PutBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.Token) && { "x-amz-bucket-object-lock-token": input.Token! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    replication: "",
  };
  let body: any;
  let contents: any;
  if (input.ReplicationConfiguration !== undefined) {
    contents = serializeAws_restXmlReplicationConfiguration(input.ReplicationConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketRequestPaymentCommand = async (
  input: PutBucketRequestPaymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    requestPayment: "",
  };
  let body: any;
  let contents: any;
  if (input.RequestPaymentConfiguration !== undefined) {
    contents = serializeAws_restXmlRequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketSnapshotCommand = async (
  input: PutBucketSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
  };
  let body: any;
  let contents: any;
  if (input.Snapshot !== undefined) {
    contents = serializeAws_restXmlSnapshot(input.Snapshot, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketSnapshotDescriptionCommand = async (
  input: PutBucketSnapshotDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot1: "",
    ...(input.Name !== undefined && { "snapshot-name": input.Name }),
  };
  let body: any;
  let contents: any;
  if (input.Snapshot !== undefined) {
    contents = serializeAws_restXmlSnapshotDescription(input.Snapshot, context);
    contents = contents.withName("Snapshot");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketStatisticCommand = async (
  input: PutBucketStatisticCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    statistic: "",
  };
  let body: any;
  let contents: any;
  if (input.StatisticConfiguration !== undefined) {
    contents = serializeAws_restXmlStatisticConfiguration(input.StatisticConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketStorageClassCommand = async (
  input: PutBucketStorageClassCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-default-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.GlacierConfiguration) && {
      "x-amz-glacier-configuration": input.GlacierConfiguration!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    storageClass: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketTaggingCommand = async (
  input: PutBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    tagging: "",
  };
  let body: any;
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketTrashCommand = async (
  input: PutBucketTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    trash: "",
  };
  let body: any;
  let contents: any;
  if (input.Trash !== undefined) {
    contents = serializeAws_restXmlTrash(input.Trash, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketVersioningCommand = async (
  input: PutBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.MFA) && { "x-amz-mfa": input.MFA! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    versioning: "",
  };
  let body: any;
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutBucketWebsiteCommand = async (
  input: PutBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    website: "",
  };
  let body: any;
  let contents: any;
  if (input.WebsiteConfiguration !== undefined) {
    contents = serializeAws_restXmlWebsiteConfiguration(input.WebsiteConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutDedupConfigurationCommand = async (
  input: PutDedupConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    dedup: "",
  };
  let body: any;
  let contents: any;
  if (input.DedupConfiguration !== undefined) {
    contents = serializeAws_restXmlDedupConfiguration(input.DedupConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutMetaSearchConfigurationCommand = async (
  input: PutMetaSearchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metasearch: "",
  };
  let body: any;
  let contents: any;
  if (input.MetaSearchConfiguration !== undefined) {
    contents = serializeAws_restXmlMetaSearchConfiguration(input.MetaSearchConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.ContentDisposition) && { "content-disposition": input.ContentDisposition! }),
    ...(isSerializableHeaderValue(input.ContentEncoding) && { "content-encoding": input.ContentEncoding! }),
    ...(isSerializableHeaderValue(input.ContentLanguage) && { "content-language": input.ContentLanguage! }),
    ...(isSerializableHeaderValue(input.ContentLength) && { "content-length": input.ContentLength!.toString() }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.Expires) && { expires: __dateToUtcString(input.Expires!).toString() }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.ServerSideEncryption) && {
      "x-amz-server-side-encryption": input.ServerSideEncryption!,
    }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.GlacierConfiguration) && {
      "x-amz-glacier-configuration": input.GlacierConfiguration!,
    }),
    ...(isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
      "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSKeyId) && {
      "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
      "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    }),
    ...(isSerializableHeaderValue(input.BucketKeyEnabled) && {
      "x-amz-server-side-encryption-bucket-key-enabled": input.BucketKeyEnabled!.toString(),
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging! }),
    ...(isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode! }),
    ...(isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
      "x-amz-object-lock-retain-until-date": (
        input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z"
      ).toString(),
    }),
    ...(isSerializableHeaderValue(input.WormRetainUntilDate) && {
      "x-amz-worm-retain-until-date": (input.WormRetainUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(isSerializableHeaderValue(input.WormGraceUntilDate) && {
      "x-amz-worm-grace-until-date": (input.WormGraceUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
      "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.BypassRetentionTimeLimit) && {
      "x-amz-bypass-retention-time-limit": input.BypassRetentionTimeLimit!.toString(),
    }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce(
        (acc: any, suffix: string) => ({
          ...acc,
          [`x-amz-meta-${suffix.toLowerCase()}`]: input.Metadata![suffix],
        }),
        {}
      )),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "PutObject",
  };
  let body: any;
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectAclCommand = async (
  input: PutObjectAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    acl: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectLegalHoldCommand = async (
  input: PutObjectLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "legal-hold": "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.LegalHold !== undefined) {
    contents = serializeAws_restXmlObjectLockLegalHold(input.LegalHold, context);
    contents = contents.withName("LegalHold");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectLockConfigurationCommand = async (
  input: PutObjectLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.Token) && { "x-amz-bucket-object-lock-token": input.Token! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "object-lock": "",
  };
  let body: any;
  let contents: any;
  if (input.ObjectLockConfiguration !== undefined) {
    contents = serializeAws_restXmlObjectLockConfiguration(input.ObjectLockConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectMetadataCommand = async (
  input: PutObjectMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.MetadataDirective) && { "x-amz-metadata-directive": input.MetadataDirective! }),
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.ContentDisposition) && { "content-disposition": input.ContentDisposition! }),
    ...(isSerializableHeaderValue(input.ContentLanguage) && { "content-language": input.ContentLanguage! }),
    ...(isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
      "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.ContentEncoding) && { "content-encoding": input.ContentEncoding! }),
    ...(isSerializableHeaderValue(input.Expires) && { expires: __dateToUtcString(input.Expires!).toString() }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce(
        (acc: any, suffix: string) => ({
          ...acc,
          [`x-amz-meta-${suffix.toLowerCase()}`]: input.Metadata![suffix],
        }),
        {}
      )),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    metadata: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectRetentionCommand = async (
  input: PutObjectRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.BypassGovernanceRetention) && {
      "x-amz-bypass-governance-retention": input.BypassGovernanceRetention!.toString(),
    }),
    ...(isSerializableHeaderValue(input.BypassRetentionTimeLimit) && {
      "x-amz-bypass-retention-time-limit": input.BypassRetentionTimeLimit!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    retention: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.Retention !== undefined) {
    contents = serializeAws_restXmlObjectLockRetention(input.Retention, context);
    contents = contents.withName("Retention");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectSymlinkCommand = async (
  input: PutObjectSymlinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.TargetObjectKey) && { "x-amz-meta-symlink-target": input.TargetObjectKey! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    symlink: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectTaggingCommand = async (
  input: PutObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    tagging: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutObjectWORMCommand = async (
  input: PutObjectWORMCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    worm: "",
  };
  let body: any;
  let contents: any;
  if (input.WORM !== undefined) {
    contents = serializeAws_restXmlWORM(input.WORM, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutOSCPConfigurationCommand = async (
  input: PutOSCPConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    oscp: "",
  };
  let body: any;
  let contents: any;
  if (input.OSCPConfiguration !== undefined) {
    contents = serializeAws_restXmlOSCPConfiguration(input.OSCPConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutPublicAccessBlockCommand = async (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    publicAccessBlock: "",
  };
  let body: any;
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutRefererCommand = async (
  input: PutRefererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    referer: "",
  };
  let body: any;
  let contents: any;
  if (input.RefererConfiguration !== undefined) {
    contents = serializeAws_restXmlRefererConfiguration(input.RefererConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutWORMConfigurationCommand = async (
  input: PutWORMConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.Token) && { "x-amz-bucket-object-lock-token": input.Token! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    worm: "",
  };
  let body: any;
  let contents: any;
  if (input.WORMConfiguration !== undefined) {
    contents = serializeAws_restXmlWORMConfiguration(input.WORMConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlPutWORMRetainPeriodCommand = async (
  input: PutWORMRetainPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "retain-period": "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.RetainPeriod !== undefined) {
    contents = serializeAws_restXmlWORMRetainPeriod(input.RetainPeriod, context);
    contents = contents.withName("RetainPeriod");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlRestoreBucketObjsTrashCommand = async (
  input: RestoreBucketObjsTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    trash: "",
    action: "restore",
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
  };
  let body: any;
  let contents: any;
  if (input.Restore !== undefined) {
    contents = serializeAws_restXmlBucketObjsTrashInfo(input.Restore, context);
    contents = contents.withName("Restore");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlRestoreBucketObjTrashCommand = async (
  input: RestoreBucketObjTrashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    trash: "",
    action: "restore",
    ...(input.Token !== undefined && { token: input.Token }),
    ...(input.Policy !== undefined && { policy: input.Policy }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlRestoreObjectCommand = async (
  input: RestoreObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    restore: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
    ...(input.SnapshotName !== undefined && { snapshotName: input.SnapshotName }),
  };
  let body: any;
  let contents: any;
  if (input.RestoreRequest !== undefined) {
    contents = serializeAws_restXmlRestoreRequest(input.RestoreRequest, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlRollbackSnapshotCommand = async (
  input: RollbackSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "rollbackSnapshot",
  };
  let body: any;
  let contents: any;
  if (input.Snapshot !== undefined) {
    contents = serializeAws_restXmlSnapshot(input.Snapshot, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlSelectObjectContentCommand = async (
  input: SelectObjectContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    select: "",
    "select-type": "2",
  };
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("SelectObjectContentRequest");
  bodyNode.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
  if (input.Expression !== undefined) {
    const node = new __XmlNode("Expression").addChildNode(new __XmlText(input.Expression)).withName("Expression");
    bodyNode.addChildNode(node);
  }
  if (input.ExpressionType !== undefined) {
    const node = new __XmlNode("ExpressionType")
      .addChildNode(new __XmlText(input.ExpressionType))
      .withName("ExpressionType");
    bodyNode.addChildNode(node);
  }
  if (input.InputSerialization !== undefined) {
    const node = serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName(
      "InputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  if (input.OutputSerialization !== undefined) {
    const node = serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName(
      "OutputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  if (input.RequestProgress !== undefined) {
    const node = serializeAws_restXmlRequestProgress(input.RequestProgress, context).withName("RequestProgress");
    bodyNode.addChildNode(node);
  }
  if (input.ScanRange !== undefined) {
    const node = serializeAws_restXmlScanRange(input.ScanRange, context).withName("ScanRange");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlUpdateAgentConfigCommand = async (
  input: UpdateAgentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
  };
  let resolvedPath = "/";
  const query: any = {
    agent: "",
  };
  let body: any;
  let contents: any;
  if (input.AgentConfig !== undefined) {
    contents = input.AgentConfig;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlUpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/xml;charset=utf-8",
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    snapshot: "",
    action: "modifySnapshotDescription",
  };
  let body: any;
  let contents: any;
  if (input.Snapshot !== undefined) {
    contents = serializeAws_restXmlSnapshot(input.Snapshot, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlUploadPartCommand = async (
  input: UploadPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.ContentLength) && { "content-length": input.ContentLength!.toString() }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "content-md5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "UploadPart",
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restXmlUploadPartCopyCommand = async (
  input: UploadPartCopyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    ...(isSerializableHeaderValue(input.CopySource) && { "x-amz-copy-source": input.CopySource! }),
    ...(isSerializableHeaderValue(input.CopySourceIfMatch) && {
      "x-amz-copy-source-if-match": input.CopySourceIfMatch!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfModifiedSince) && {
      "x-amz-copy-source-if-modified-since": __dateToUtcString(input.CopySourceIfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfNoneMatch) && {
      "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince) && {
      "x-amz-copy-source-if-unmodified-since": __dateToUtcString(input.CopySourceIfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.CopySourceRange) && { "x-amz-copy-source-range": input.CopySourceRange! }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerAlgorithm) && {
      "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKey) && {
      "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKeyMD5) && {
      "x-amz-copy-source-server-side-encryption-customer-key-md5": input.CopySourceSSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedSourceBucketOwner) && {
      "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "UploadPartCopy",
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restXmlAbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlAbortMultipartUploadCommandError(output, context);
  }
  const contents: AbortMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlAbortMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      response = {
        ...(await deserializeAws_restXmlNoSuchUploadResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlBatchRestoreObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRestoreObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlBatchRestoreObjectCommandError(output, context);
  }
  const contents: BatchRestoreObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    Errors: undefined,
    Restored: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Error === "") {
    contents.Errors = [];
  }
  if (data["Error"] !== undefined) {
    contents.Errors = deserializeAws_restXmlErrors(__getArrayIfSingleItem(data["Error"]), context);
  }
  if (data.Restored === "") {
    contents.Restored = [];
  }
  if (data["Restored"] !== undefined && data["Restored"]["member"] !== undefined) {
    contents.Restored = deserializeAws_restXmlDeletedObjects(
      __getArrayIfSingleItem(data["Restored"]["member"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlBatchRestoreObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRestoreObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      response = {
        ...(await deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCompleteMultipartUploadCommandError(output, context);
  }
  const contents: CompleteMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    Bucket: undefined,
    BucketKeyEnabled: undefined,
    ETag: undefined,
    Expiration: undefined,
    Key: undefined,
    Location: undefined,
    RequestCharged: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data["ETag"] !== undefined) {
    contents.ETag = data["ETag"];
  }
  if (data["Key"] !== undefined) {
    contents.Key = data["Key"];
  }
  if (data["Location"] !== undefined) {
    contents.Location = data["Location"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCompleteMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCopyObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCopyObjectCommandError(output, context);
  }
  const contents: CopyObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    BucketKeyEnabled: undefined,
    CopyObjectResult: undefined,
    CopySourceVersionId: undefined,
    Expiration: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSEncryptionContext: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-copy-source-version-id"] !== undefined) {
    contents.CopySourceVersionId = output.headers["x-amz-copy-source-version-id"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
    contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  contents.CopyObjectResult = deserializeAws_restXmlCopyObjectResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCopyObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      response = {
        ...(await deserializeAws_restXmlObjectNotInActiveTierErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateBucketCommandError(output, context);
  }
  const contents: CreateBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      response = {
        ...(await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateMultipartUploadCommandError(output, context);
  }
  const contents: CreateMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    AbortDate: undefined,
    AbortRuleId: undefined,
    Bucket: undefined,
    BucketKeyEnabled: undefined,
    Key: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSEncryptionContext: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    UploadId: undefined,
  };
  if (output.headers["x-amz-abort-date"] !== undefined) {
    contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
  }
  if (output.headers["x-amz-abort-rule-id"] !== undefined) {
    contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
    contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data["Key"] !== undefined) {
    contents.Key = data["Key"];
  }
  if (data["UploadId"] !== undefined) {
    contents.UploadId = data["UploadId"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateSnapshotCommandError(output, context);
  }
  const contents: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateSnapshotPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateSnapshotPolicyCommandError(output, context);
  }
  const contents: CreateSnapshotPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateSnapshotPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDedupstatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DedupstatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDedupstatCommandError(output, context);
  }
  const contents: DedupstatCommandOutput = {
    $metadata: deserializeMetadata(output),
    Stat: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Stat"] !== undefined) {
    contents.Stat = deserializeAws_restXmlStat(data["Stat"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDedupstatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DedupstatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAgentsCommandError(output, context);
  }
  const contents: DeleteAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketCommandError(output, context);
  }
  const contents: DeleteBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketAdrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAdrCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketAdrCommandError(output, context);
  }
  const contents: DeleteBucketAdrCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketAdrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAdrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketAnalyticsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketBtsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketBtsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketBtsCommandError(output, context);
  }
  const contents: DeleteBucketBtsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketBtsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketBtsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketCompressionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCompressionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketCompressionConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketCompressionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketCompressionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCompressionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketCorsCommandError(output, context);
  }
  const contents: DeleteBucketCorsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketDedupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketDedupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketDedupCommandError(output, context);
  }
  const contents: DeleteBucketDedupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketDedupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketDedupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketEncryptionCommandError(output, context);
  }
  const contents: DeleteBucketEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketIntelligentTieringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketInventoryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketLifecycleCommandError(output, context);
  }
  const contents: DeleteBucketLifecycleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketLifecycleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketMetricsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketObjsTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketObjsTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketObjsTrashCommandError(output, context);
  }
  const contents: DeleteBucketObjsTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
    Deleted: undefined,
    Errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Deleted === "") {
    contents.Deleted = [];
  }
  if (data["Deleted"] !== undefined) {
    contents.Deleted = deserializeAws_restXmlDeletedObjects(__getArrayIfSingleItem(data["Deleted"]), context);
  }
  if (data.Error === "") {
    contents.Errors = [];
  }
  if (data["Error"] !== undefined) {
    contents.Errors = deserializeAws_restXmlErrors(__getArrayIfSingleItem(data["Error"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketObjsTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketObjsTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketObjTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketObjTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketObjTrashCommandError(output, context);
  }
  const contents: DeleteBucketObjTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketObjTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketObjTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError(output, context);
  }
  const contents: DeleteBucketOwnershipControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context);
  }
  const contents: DeleteBucketPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketQoSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketQoSCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketQoSCommandError(output, context);
  }
  const contents: DeleteBucketQoSCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketQoSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketQoSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketReplicationCommandError(output, context);
  }
  const contents: DeleteBucketReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketSnapshotCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketSnapshotCommandError(output, context);
  }
  const contents: DeleteBucketSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketSnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketSnapshotsCommandError(output, context);
  }
  const contents: DeleteBucketSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Deleted: undefined,
    Errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Deleted === "") {
    contents.Deleted = [];
  }
  if (data["Deleted"] !== undefined) {
    contents.Deleted = deserializeAws_restXmlSnapshotIdentifierList(__getArrayIfSingleItem(data["Deleted"]), context);
  }
  if (data.Error === "") {
    contents.Errors = [];
  }
  if (data["Error"] !== undefined) {
    contents.Errors = deserializeAws_restXmlErrors(__getArrayIfSingleItem(data["Error"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketStatisticCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketStatisticCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketStatisticCommandError(output, context);
  }
  const contents: DeleteBucketStatisticCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketStatisticCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketStatisticCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context);
  }
  const contents: DeleteBucketTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTrashCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketTrashCommandError(output, context);
  }
  const contents: DeleteBucketTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketWebsiteCommandError(output, context);
  }
  const contents: DeleteBucketWebsiteCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteMetaSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetaSearchCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteMetaSearchCommandError(output, context);
  }
  const contents: DeleteMetaSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteMetaSearchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetaSearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeleteMarker: undefined,
    RequestCharged: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-delete-marker"] !== undefined) {
    contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectsCommandError(output, context);
  }
  const contents: DeleteObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Deleted: undefined,
    Errors: undefined,
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.Deleted === "") {
    contents.Deleted = [];
  }
  if (data["Deleted"] !== undefined) {
    contents.Deleted = deserializeAws_restXmlDeletedObjects(__getArrayIfSingleItem(data["Deleted"]), context);
  }
  if (data.Error === "") {
    contents.Errors = [];
  }
  if (data["Error"] !== undefined) {
    contents.Errors = deserializeAws_restXmlErrors(__getArrayIfSingleItem(data["Error"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectTaggingCommandError(output, context);
  }
  const contents: DeleteObjectTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    VersionId: undefined,
  };
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteOSCPCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOSCPCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteOSCPCommandError(output, context);
  }
  const contents: DeleteOSCPCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteOSCPCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOSCPCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context);
  }
  const contents: DeletePublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeletePublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteRefererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRefererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteRefererCommandError(output, context);
  }
  const contents: DeleteRefererCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteRefererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRefererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteSingleAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSingleAgentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteSingleAgentCommandError(output, context);
  }
  const contents: DeleteSingleAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteSingleAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSingleAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteSnapshotCommandError(output, context);
  }
  const contents: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteSnapshotPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteSnapshotPolicyCommandError(output, context);
  }
  const contents: DeleteSnapshotPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteSnapshotPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteSnapshotsCommandError(output, context);
  }
  const contents: DeleteSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAgentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAgentConfigCommandError(output, context);
  }
  const contents: GetAgentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AgentConfig: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.AgentConfig = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAgentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAgentPathConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentPathConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAgentPathConfigCommandError(output, context);
  }
  const contents: GetAgentPathConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ListAgentDirectoryResult: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ListAgentDirectoryResult = deserializeAws_restXmlStringTypeListAgentDirectoryResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAgentPathConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentPathConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: GetBucketAccelerateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Status"] !== undefined) {
    contents.Status = data["Status"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAclCommandError(output, context);
  }
  const contents: GetBucketAclCommandOutput = {
    $metadata: deserializeMetadata(output),
    Grants: undefined,
    Owner: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccessControlList === "") {
    contents.Grants = [];
  }
  if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = deserializeAws_restXmlGrants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketAdrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAdrCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAdrCommandError(output, context);
  }
  const contents: GetBucketAdrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ArchiveDirectReadConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ArchiveDirectReadConfiguration = deserializeAws_restXmlArchiveDirectReadConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketAdrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAdrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: GetBucketAnalyticsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalyticsConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.AnalyticsConfiguration = deserializeAws_restXmlAnalyticsConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketBtsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketBtsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketBtsCommandError(output, context);
  }
  const contents: GetBucketBtsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BtsRule: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.BtsRule = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketBtsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketBtsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketCompressionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCompressionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketCompressionConfigurationCommandError(output, context);
  }
  const contents: GetBucketCompressionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CompressionConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CompressionConfiguration = deserializeAws_restXmlCompressionConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketCompressionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCompressionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketCorsCommandError(output, context);
  }
  const contents: GetBucketCorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CORSRules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CORSRule === "") {
    contents.CORSRules = [];
  }
  if (data["CORSRule"] !== undefined) {
    contents.CORSRules = deserializeAws_restXmlCORSRules(__getArrayIfSingleItem(data["CORSRule"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketEncryptionCommandError(output, context);
  }
  const contents: GetBucketEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ServerSideEncryptionConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ServerSideEncryptionConfiguration = deserializeAws_restXmlServerSideEncryptionConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: GetBucketIntelligentTieringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    IntelligentTieringConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.IntelligentTieringConfiguration = deserializeAws_restXmlIntelligentTieringConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: GetBucketInventoryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    InventoryConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.InventoryConfiguration = deserializeAws_restXmlInventoryConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: GetBucketLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Rules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Rule === "") {
    contents.Rules = [];
  }
  if (data["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlLifecycleRules(__getArrayIfSingleItem(data["Rule"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLocationCommandError(output, context);
  }
  const contents: GetBucketLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    LocationConstraint: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["LocationConstraint"] !== undefined) {
    contents.LocationConstraint = data["LocationConstraint"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLoggingCommandError(output, context);
  }
  const contents: GetBucketLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    LoggingEnabled: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["LoggingEnabled"] !== undefined) {
    contents.LoggingEnabled = deserializeAws_restXmlLoggingEnabled(data["LoggingEnabled"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: GetBucketMetricsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    MetricsConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MetricsConfiguration = deserializeAws_restXmlMetricsConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: GetBucketNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    LambdaFunctionConfigurations: undefined,
    QueueConfigurations: undefined,
    TopicConfigurations: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CloudFunctionConfiguration === "") {
    contents.LambdaFunctionConfigurations = [];
  }
  if (data["CloudFunctionConfiguration"] !== undefined) {
    contents.LambdaFunctionConfigurations = deserializeAws_restXmlLambdaFunctionConfigurationList(
      __getArrayIfSingleItem(data["CloudFunctionConfiguration"]),
      context
    );
  }
  if (data.QueueConfiguration === "") {
    contents.QueueConfigurations = [];
  }
  if (data["QueueConfiguration"] !== undefined) {
    contents.QueueConfigurations = deserializeAws_restXmlQueueConfigurationList(
      __getArrayIfSingleItem(data["QueueConfiguration"]),
      context
    );
  }
  if (data.TopicConfiguration === "") {
    contents.TopicConfigurations = [];
  }
  if (data["TopicConfiguration"] !== undefined) {
    contents.TopicConfigurations = deserializeAws_restXmlTopicConfigurationList(
      __getArrayIfSingleItem(data["TopicConfiguration"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketOverviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOverviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketOverviewCommandError(output, context);
  }
  const contents: GetBucketOverviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ListBucketResult: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ListBucketResult = deserializeAws_restXmlListBucketResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketOverviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOverviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketOwnershipControlsCommandError(output, context);
  }
  const contents: GetBucketOwnershipControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    OwnershipControls: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.OwnershipControls = deserializeAws_restXmlOwnershipControls(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketPolicyCommandError(output, context);
  }
  const contents: GetBucketPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.Policy = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketPolicyStatusCommandError(output, context);
  }
  const contents: GetBucketPolicyStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    PolicyStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketQoSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketQoSCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketQoSCommandError(output, context);
  }
  const contents: GetBucketQoSCommandOutput = {
    $metadata: deserializeMetadata(output),
    QoSConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.QoSConfiguration = deserializeAws_restXmlQoSConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketQoSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketQoSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketQuotaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketQuotaCommandError(output, context);
  }
  const contents: GetBucketQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    Quota: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.Quota = deserializeAws_restXmlQuota(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketReplicationCommandError(output, context);
  }
  const contents: GetBucketReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReplicationConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ReplicationConfiguration = deserializeAws_restXmlReplicationConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketRequestPaymentCommandError(output, context);
  }
  const contents: GetBucketRequestPaymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Payer: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Payer"] !== undefined) {
    contents.Payer = data["Payer"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketSnapshotCommandError(output, context);
  }
  const contents: GetBucketSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    Snapshot: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Snapshot"] !== undefined) {
    contents.Snapshot = deserializeAws_restXmlSnapshot(data["Snapshot"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketStatisticCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStatisticCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketStatisticCommandError(output, context);
  }
  const contents: GetBucketStatisticCommandOutput = {
    $metadata: deserializeMetadata(output),
    StatisticConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.StatisticConfiguration = deserializeAws_restXmlStatisticConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketStatisticCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStatisticCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketStorageInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStorageInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketStorageInfoCommandError(output, context);
  }
  const contents: GetBucketStorageInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    GetBucketStorageInfoResult: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.GetBucketStorageInfoResult = deserializeAws_restXmlGetBucketStorageInfoResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketStorageInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketStorageInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketTaggingCommandError(output, context);
  }
  const contents: GetBucketTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    TagSet: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.TagSet === "") {
    contents.TagSet = [];
  }
  if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketTrashCommandError(output, context);
  }
  const contents: GetBucketTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
    Trash: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.Trash = deserializeAws_restXmlTrash(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketTrashObjListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTrashObjListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketTrashObjListCommandError(output, context);
  }
  const contents: GetBucketTrashObjListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ListBucketTrashResult: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ListBucketTrashResult = deserializeAws_restXmlListBucketTrashResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketTrashObjListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTrashObjListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketVersioningCommandError(output, context);
  }
  const contents: GetBucketVersioningCommandOutput = {
    $metadata: deserializeMetadata(output),
    MFADelete: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["MfaDelete"] !== undefined) {
    contents.MFADelete = data["MfaDelete"];
  }
  if (data["Status"] !== undefined) {
    contents.Status = data["Status"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketWebsiteCommandError(output, context);
  }
  const contents: GetBucketWebsiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ErrorDocument: undefined,
    IndexDocument: undefined,
    RedirectAllRequestsTo: undefined,
    RoutingRules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["ErrorDocument"] !== undefined) {
    contents.ErrorDocument = deserializeAws_restXmlErrorDocument(data["ErrorDocument"], context);
  }
  if (data["IndexDocument"] !== undefined) {
    contents.IndexDocument = deserializeAws_restXmlIndexDocument(data["IndexDocument"], context);
  }
  if (data["RedirectAllRequestsTo"] !== undefined) {
    contents.RedirectAllRequestsTo = deserializeAws_restXmlRedirectAllRequestsTo(
      data["RedirectAllRequestsTo"],
      context
    );
  }
  if (data.RoutingRules === "") {
    contents.RoutingRules = [];
  }
  if (data["RoutingRules"] !== undefined && data["RoutingRules"]["RoutingRule"] !== undefined) {
    contents.RoutingRules = deserializeAws_restXmlRoutingRules(
      __getArrayIfSingleItem(data["RoutingRules"]["RoutingRule"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectCommandError(output, context);
  }
  const contents: GetObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    AcceptRanges: undefined,
    Body: undefined,
    BucketKeyEnabled: undefined,
    CacheControl: undefined,
    ContentDisposition: undefined,
    ContentEncoding: undefined,
    ContentLanguage: undefined,
    ContentLength: undefined,
    ContentRange: undefined,
    ContentType: undefined,
    DeleteMarker: undefined,
    ETag: undefined,
    Expiration: undefined,
    Expires: undefined,
    LastModified: undefined,
    Metadata: undefined,
    MissingMeta: undefined,
    ObjectLockLegalHoldStatus: undefined,
    ObjectLockMode: undefined,
    ObjectLockRetainUntilDate: undefined,
    PartsCount: undefined,
    ReplicationStatus: undefined,
    RequestCharged: undefined,
    Restore: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    StorageClass: undefined,
    TagCount: undefined,
    VersionId: undefined,
    WebsiteRedirectLocation: undefined,
  };
  if (output.headers["x-amz-delete-marker"] !== undefined) {
    contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
  }
  if (output.headers["accept-ranges"] !== undefined) {
    contents.AcceptRanges = output.headers["accept-ranges"];
  }
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-restore"] !== undefined) {
    contents.Restore = output.headers["x-amz-restore"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = new Date(output.headers["last-modified"]);
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers["content-length"], 10);
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["x-amz-missing-meta"] !== undefined) {
    contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-disposition"] !== undefined) {
    contents.ContentDisposition = output.headers["content-disposition"];
  }
  if (output.headers["content-encoding"] !== undefined) {
    contents.ContentEncoding = output.headers["content-encoding"];
  }
  if (output.headers["content-language"] !== undefined) {
    contents.ContentLanguage = output.headers["content-language"];
  }
  if (output.headers["content-range"] !== undefined) {
    contents.ContentRange = output.headers["content-range"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["expires"] !== undefined) {
    contents.Expires = new Date(output.headers["expires"]);
  }
  if (output.headers["x-amz-website-redirect-location"] !== undefined) {
    contents.WebsiteRedirectLocation = output.headers["x-amz-website-redirect-location"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-storage-class"] !== undefined) {
    contents.StorageClass = output.headers["x-amz-storage-class"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-replication-status"] !== undefined) {
    contents.ReplicationStatus = output.headers["x-amz-replication-status"];
  }
  if (output.headers["x-amz-mp-parts-count"] !== undefined) {
    contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
  }
  if (output.headers["x-amz-tagging-count"] !== undefined) {
    contents.TagCount = parseInt(output.headers["x-amz-tagging-count"], 10);
  }
  if (output.headers["x-amz-object-lock-mode"] !== undefined) {
    contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
  }
  if (output.headers["x-amz-object-lock-retain-until-date"] !== undefined) {
    contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
  }
  if (output.headers["x-amz-object-lock-legal-hold"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = output.headers["x-amz-object-lock-legal-hold"];
  }
  Object.keys(output.headers).forEach((header) => {
    if (contents.Metadata === undefined) {
      contents.Metadata = {};
    }
    if (header.startsWith("x-amz-meta-")) {
      contents.Metadata[header.substring(11)] = output.headers[header];
    }
  });
  const data: any = output.body;
  contents.Body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      response = {
        ...(await deserializeAws_restXmlInvalidObjectStateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectAclCommandError(output, context);
  }
  const contents: GetObjectAclCommandOutput = {
    $metadata: deserializeMetadata(output),
    Grants: undefined,
    Owner: undefined,
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.AccessControlList === "") {
    contents.Grants = [];
  }
  if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = deserializeAws_restXmlGrants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectLegalHoldCommandError(output, context);
  }
  const contents: GetObjectLegalHoldCommandOutput = {
    $metadata: deserializeMetadata(output),
    LegalHold: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.LegalHold = deserializeAws_restXmlObjectLockLegalHold(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectLockConfigurationCommandError(output, context);
  }
  const contents: GetObjectLockConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ObjectLockConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ObjectLockConfiguration = deserializeAws_restXmlObjectLockConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectRetentionCommandError(output, context);
  }
  const contents: GetObjectRetentionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Retention: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.Retention = deserializeAws_restXmlObjectLockRetention(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectSymlinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectSymlinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectSymlinkCommandError(output, context);
  }
  const contents: GetObjectSymlinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    SymlinkTarget: undefined,
    TargetStatus: undefined,
  };
  if (output.headers["x-amz-meta-target-status"] !== undefined) {
    contents.TargetStatus = parseInt(output.headers["x-amz-meta-target-status"], 10);
  }
  if (output.headers["x-amz-meta-symlink-target"] !== undefined) {
    contents.SymlinkTarget = output.headers["x-amz-meta-symlink-target"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectSymlinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectSymlinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectTaggingCommandError(output, context);
  }
  const contents: GetObjectTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    TagSet: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.TagSet === "") {
    contents.TagSet = [];
  }
  if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectTorrentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectTorrentCommandError(output, context);
  }
  const contents: GetObjectTorrentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Body: undefined,
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = output.body;
  contents.Body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectTorrentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectWORMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectWORMCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectWORMCommandError(output, context);
  }
  const contents: GetObjectWORMCommandOutput = {
    $metadata: deserializeMetadata(output),
    WORM: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.WORM = deserializeAws_restXmlWORM(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectWORMCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectWORMCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetOSCPConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOSCPConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetOSCPConfigurationCommandError(output, context);
  }
  const contents: GetOSCPConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policies: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policy === "") {
    contents.Policies = [];
  }
  if (data["Policy"] !== undefined) {
    contents.Policies = deserializeAws_restXmlOSCPPolicies(__getArrayIfSingleItem(data["Policy"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetOSCPConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOSCPConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context);
  }
  const contents: GetPublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    PublicAccessBlockConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetRefererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRefererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetRefererCommandError(output, context);
  }
  const contents: GetRefererCommandOutput = {
    $metadata: deserializeMetadata(output),
    RefererConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RefererConfiguration = deserializeAws_restXmlRefererConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetRefererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRefererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetSnapshotInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetSnapshotInfoCommandError(output, context);
  }
  const contents: GetSnapshotInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    Snapshot: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.Snapshot = deserializeAws_restXmlSnapshot(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetSnapshotInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetSnapshotPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetSnapshotPolicyCommandError(output, context);
  }
  const contents: GetSnapshotPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    SnapshotPolicy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SnapshotPolicy = deserializeAws_restXmlSnapshotPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetSnapshotPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetSnapshotsCommandError(output, context);
  }
  const contents: GetSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ListBucketAllSnapshotResult: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ListBucketAllSnapshotResult = deserializeAws_restXmlListBucketAllSnapshotResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetWORMConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWORMConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetWORMConfigurationCommandError(output, context);
  }
  const contents: GetWORMConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    WORMConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.WORMConfiguration = deserializeAws_restXmlWORMConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetWORMConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWORMConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetWORMRetainPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWORMRetainPeriodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetWORMRetainPeriodCommandError(output, context);
  }
  const contents: GetWORMRetainPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
    RetainPeriod: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RetainPeriod = deserializeAws_restXmlWORMRetainPeriod(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetWORMRetainPeriodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWORMRetainPeriodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHeadBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHeadBucketCommandError(output, context);
  }
  const contents: HeadBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHeadBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      response = {
        ...(await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHeadBucketObjTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketObjTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHeadBucketObjTrashCommandError(output, context);
  }
  const contents: HeadBucketObjTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
    AcceptRanges: undefined,
    ArchiveStatus: undefined,
    BucketKeyEnabled: undefined,
    CacheControl: undefined,
    CompressSize: undefined,
    ContentDisposition: undefined,
    ContentEncoding: undefined,
    ContentLanguage: undefined,
    ContentLength: undefined,
    ContentType: undefined,
    DeleteMarker: undefined,
    DeletedTime: undefined,
    ETag: undefined,
    EncryptionMode: undefined,
    Expiration: undefined,
    Expires: undefined,
    GlacierConfiguration: undefined,
    GlacierRestoredStorageClass: undefined,
    LastModified: undefined,
    Metadata: undefined,
    MissingMeta: undefined,
    ObjectLockLegalHoldStatus: undefined,
    ObjectLockMode: undefined,
    ObjectLockRetainUntilDate: undefined,
    PartsCount: undefined,
    ReplicationStatus: undefined,
    RequestCharged: undefined,
    Restore: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    StorageClass: undefined,
    VersionId: undefined,
    WebsiteRedirectLocation: undefined,
  };
  if (output.headers["x-amz-delete-marker"] !== undefined) {
    contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
  }
  if (output.headers["x-amz-encryption-mode"] !== undefined) {
    contents.EncryptionMode = output.headers["x-amz-encryption-mode"];
  }
  if (output.headers["accept-ranges"] !== undefined) {
    contents.AcceptRanges = output.headers["accept-ranges"];
  }
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-restore"] !== undefined) {
    contents.Restore = output.headers["x-amz-restore"];
  }
  if (output.headers["x-amz-archive-status"] !== undefined) {
    contents.ArchiveStatus = output.headers["x-amz-archive-status"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = new Date(output.headers["last-modified"]);
  }
  if (output.headers["x-amz-deleted-time"] !== undefined) {
    contents.DeletedTime = new Date(output.headers["x-amz-deleted-time"]);
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers["content-length"], 10);
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["x-amz-missing-meta"] !== undefined) {
    contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-disposition"] !== undefined) {
    contents.ContentDisposition = output.headers["content-disposition"];
  }
  if (output.headers["content-encoding"] !== undefined) {
    contents.ContentEncoding = output.headers["content-encoding"];
  }
  if (output.headers["content-language"] !== undefined) {
    contents.ContentLanguage = output.headers["content-language"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["expires"] !== undefined) {
    contents.Expires = new Date(output.headers["expires"]);
  }
  if (output.headers["x-amz-website-redirect-location"] !== undefined) {
    contents.WebsiteRedirectLocation = output.headers["x-amz-website-redirect-location"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-final-size"] !== undefined) {
    contents.CompressSize = parseInt(output.headers["x-amz-final-size"], 10);
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-storage-class"] !== undefined) {
    contents.StorageClass = output.headers["x-amz-storage-class"];
  }
  if (output.headers["x-amz-glacier-configuration"] !== undefined) {
    contents.GlacierConfiguration = output.headers["x-amz-glacier-configuration"];
  }
  if (output.headers["x-amz-glacier-restored-storage-class"] !== undefined) {
    contents.GlacierRestoredStorageClass = output.headers["x-amz-glacier-restored-storage-class"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-replication-status"] !== undefined) {
    contents.ReplicationStatus = output.headers["x-amz-replication-status"];
  }
  if (output.headers["x-amz-mp-parts-count"] !== undefined) {
    contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
  }
  if (output.headers["x-amz-object-lock-mode"] !== undefined) {
    contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
  }
  if (output.headers["x-amz-object-lock-retain-until-date"] !== undefined) {
    contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
  }
  if (output.headers["x-amz-object-lock-legal-hold"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = output.headers["x-amz-object-lock-legal-hold"];
  }
  Object.keys(output.headers).forEach((header) => {
    if (contents.Metadata === undefined) {
      contents.Metadata = {};
    }
    if (header.startsWith("x-amz-meta-")) {
      contents.Metadata[header.substring(11)] = output.headers[header];
    }
  });
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHeadBucketObjTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketObjTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHeadObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHeadObjectCommandError(output, context);
  }
  const contents: HeadObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    AcceptRanges: undefined,
    ArchiveStatus: undefined,
    BucketKeyEnabled: undefined,
    CacheControl: undefined,
    CompressSize: undefined,
    ContentDisposition: undefined,
    ContentEncoding: undefined,
    ContentLanguage: undefined,
    ContentLength: undefined,
    ContentType: undefined,
    DeleteMarker: undefined,
    DeletedTime: undefined,
    ETag: undefined,
    EncryptionMode: undefined,
    Expiration: undefined,
    Expires: undefined,
    GlacierConfiguration: undefined,
    GlacierRestoredStorageClass: undefined,
    LastModified: undefined,
    Metadata: undefined,
    MissingMeta: undefined,
    ObjectLockLegalHoldStatus: undefined,
    ObjectLockMode: undefined,
    ObjectLockRetainUntilDate: undefined,
    PartsCount: undefined,
    ReplicationStatus: undefined,
    RequestCharged: undefined,
    Restore: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    StorageClass: undefined,
    VersionId: undefined,
    WebsiteRedirectLocation: undefined,
  };
  if (output.headers["x-amz-delete-marker"] !== undefined) {
    contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
  }
  if (output.headers["x-amz-encryption-mode"] !== undefined) {
    contents.EncryptionMode = output.headers["x-amz-encryption-mode"];
  }
  if (output.headers["accept-ranges"] !== undefined) {
    contents.AcceptRanges = output.headers["accept-ranges"];
  }
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-restore"] !== undefined) {
    contents.Restore = output.headers["x-amz-restore"];
  }
  if (output.headers["x-amz-archive-status"] !== undefined) {
    contents.ArchiveStatus = output.headers["x-amz-archive-status"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = new Date(output.headers["last-modified"]);
  }
  if (output.headers["x-amz-deleted-time"] !== undefined) {
    contents.DeletedTime = new Date(output.headers["x-amz-deleted-time"]);
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers["content-length"], 10);
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["x-amz-missing-meta"] !== undefined) {
    contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-disposition"] !== undefined) {
    contents.ContentDisposition = output.headers["content-disposition"];
  }
  if (output.headers["content-encoding"] !== undefined) {
    contents.ContentEncoding = output.headers["content-encoding"];
  }
  if (output.headers["content-language"] !== undefined) {
    contents.ContentLanguage = output.headers["content-language"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["expires"] !== undefined) {
    contents.Expires = new Date(output.headers["expires"]);
  }
  if (output.headers["x-amz-website-redirect-location"] !== undefined) {
    contents.WebsiteRedirectLocation = output.headers["x-amz-website-redirect-location"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-final-size"] !== undefined) {
    contents.CompressSize = parseInt(output.headers["x-amz-final-size"], 10);
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-storage-class"] !== undefined) {
    contents.StorageClass = output.headers["x-amz-storage-class"];
  }
  if (output.headers["x-amz-glacier-configuration"] !== undefined) {
    contents.GlacierConfiguration = output.headers["x-amz-glacier-configuration"];
  }
  if (output.headers["x-amz-glacier-restored-storage-class"] !== undefined) {
    contents.GlacierRestoredStorageClass = output.headers["x-amz-glacier-restored-storage-class"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-replication-status"] !== undefined) {
    contents.ReplicationStatus = output.headers["x-amz-replication-status"];
  }
  if (output.headers["x-amz-mp-parts-count"] !== undefined) {
    contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
  }
  if (output.headers["x-amz-object-lock-mode"] !== undefined) {
    contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
  }
  if (output.headers["x-amz-object-lock-retain-until-date"] !== undefined) {
    contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
  }
  if (output.headers["x-amz-object-lock-legal-hold"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = output.headers["x-amz-object-lock-legal-hold"];
  }
  Object.keys(output.headers).forEach((header) => {
    if (contents.Metadata === undefined) {
      contents.Metadata = {};
    }
    if (header.startsWith("x-amz-meta-")) {
      contents.Metadata[header.substring(11)] = output.headers[header];
    }
  });
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHeadObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlIdentityAuthenticationConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IdentityAuthenticationConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlIdentityAuthenticationConfigCommandError(output, context);
  }
  const contents: IdentityAuthenticationConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlIdentityAuthenticationConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IdentityAuthenticationConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError(output, context);
  }
  const contents: ListBucketAnalyticsConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalyticsConfigurationList: undefined,
    ContinuationToken: undefined,
    IsTruncated: undefined,
    NextContinuationToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalyticsConfiguration === "") {
    contents.AnalyticsConfigurationList = [];
  }
  if (data["AnalyticsConfiguration"] !== undefined) {
    contents.AnalyticsConfigurationList = deserializeAws_restXmlAnalyticsConfigurationList(
      __getArrayIfSingleItem(data["AnalyticsConfiguration"]),
      context
    );
  }
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommandError(output, context);
  }
  const contents: ListBucketIntelligentTieringConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContinuationToken: undefined,
    IntelligentTieringConfigurationList: undefined,
    IsTruncated: undefined,
    NextContinuationToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data.IntelligentTieringConfiguration === "") {
    contents.IntelligentTieringConfigurationList = [];
  }
  if (data["IntelligentTieringConfiguration"] !== undefined) {
    contents.IntelligentTieringConfigurationList = deserializeAws_restXmlIntelligentTieringConfigurationList(
      __getArrayIfSingleItem(data["IntelligentTieringConfiguration"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketInventoryConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketInventoryConfigurationsCommandError(output, context);
  }
  const contents: ListBucketInventoryConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContinuationToken: undefined,
    InventoryConfigurationList: undefined,
    IsTruncated: undefined,
    NextContinuationToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data.InventoryConfiguration === "") {
    contents.InventoryConfigurationList = [];
  }
  if (data["InventoryConfiguration"] !== undefined) {
    contents.InventoryConfigurationList = deserializeAws_restXmlInventoryConfigurationList(
      __getArrayIfSingleItem(data["InventoryConfiguration"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketInventoryConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketMetricsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketMetricsConfigurationsCommandError(output, context);
  }
  const contents: ListBucketMetricsConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContinuationToken: undefined,
    IsTruncated: undefined,
    MetricsConfigurationList: undefined,
    NextContinuationToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data.MetricsConfiguration === "") {
    contents.MetricsConfigurationList = [];
  }
  if (data["MetricsConfiguration"] !== undefined) {
    contents.MetricsConfigurationList = deserializeAws_restXmlMetricsConfigurationList(
      __getArrayIfSingleItem(data["MetricsConfiguration"]),
      context
    );
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketMetricsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketsCommandError(output, context);
  }
  const contents: ListBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Buckets: undefined,
    Owner: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Buckets === "") {
    contents.Buckets = [];
  }
  if (data["Buckets"] !== undefined && data["Buckets"]["Bucket"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(data["Buckets"]["Bucket"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketSnapshotObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketSnapshotObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketSnapshotObjectCommandError(output, context);
  }
  const contents: ListBucketSnapshotObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ListBucketSnapshotObjectResult: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ListBucketSnapshotObjectResult = deserializeAws_restXmlListBucketSnapshotObjectResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketSnapshotObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketSnapshotObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketSnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketSnapshotsCommandError(output, context);
  }
  const contents: ListBucketSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Snapshot: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.member === "") {
    contents.Snapshot = [];
  }
  if (data["member"] !== undefined) {
    contents.Snapshot = deserializeAws_restXmlSnapshotList(__getArrayIfSingleItem(data["member"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListMetaSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetaSearchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListMetaSearchCommandError(output, context);
  }
  const contents: ListMetaSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    SearchResult: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.SearchResult = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListMetaSearchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetaSearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListMetaSearchBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetaSearchBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListMetaSearchBucketsCommandError(output, context);
  }
  const contents: ListMetaSearchBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountIdMarker: undefined,
    BucketMarker: undefined,
    Buckets: undefined,
    IsTruncated: undefined,
    MaxKeys: undefined,
    NextBucketMarker: undefined,
    Prefix: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["AccountIdMarker"] !== undefined) {
    contents.AccountIdMarker = data["AccountIdMarker"];
  }
  if (data["BucketMarker"] !== undefined) {
    contents.BucketMarker = data["BucketMarker"];
  }
  if (data.Buckets === "") {
    contents.Buckets = [];
  }
  if (data["Buckets"] !== undefined && data["Buckets"]["Bucket"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlMetaSearchBuckets(
      __getArrayIfSingleItem(data["Buckets"]["Bucket"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(data["MaxKeys"]);
  }
  if (data["NextBucketMarker"] !== undefined) {
    contents.NextBucketMarker = data["NextBucketMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListMetaSearchBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetaSearchBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListMultipartUploadsCommandError(output, context);
  }
  const contents: ListMultipartUploadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Bucket: undefined,
    CommonPrefixes: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    KeyMarker: undefined,
    MaxUploads: undefined,
    NextKeyMarker: undefined,
    NextUploadIdMarker: undefined,
    Prefix: undefined,
    StorageClass: undefined,
    UploadIdMarker: undefined,
    Uploads: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["KeyMarker"] !== undefined) {
    contents.KeyMarker = data["KeyMarker"];
  }
  if (data["MaxUploads"] !== undefined) {
    contents.MaxUploads = parseInt(data["MaxUploads"]);
  }
  if (data["NextKeyMarker"] !== undefined) {
    contents.NextKeyMarker = data["NextKeyMarker"];
  }
  if (data["NextUploadIdMarker"] !== undefined) {
    contents.NextUploadIdMarker = data["NextUploadIdMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = data["StorageClass"];
  }
  if (data["UploadIdMarker"] !== undefined) {
    contents.UploadIdMarker = data["UploadIdMarker"];
  }
  if (data.Upload === "") {
    contents.Uploads = [];
  }
  if (data["Upload"] !== undefined) {
    contents.Uploads = deserializeAws_restXmlMultipartUploadList(__getArrayIfSingleItem(data["Upload"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListMultipartUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectsCommandError(output, context);
  }
  const contents: ListObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CommonPrefixes: undefined,
    Contents: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    MaxKeys: undefined,
    Name: undefined,
    NextMarker: undefined,
    Prefix: undefined,
    StorageClass: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.Contents === "") {
    contents.Contents = [];
  }
  if (data["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlObjectList(__getArrayIfSingleItem(data["Contents"]), context);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["Marker"] !== undefined) {
    contents.Marker = data["Marker"];
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(data["MaxKeys"]);
  }
  if (data["Name"] !== undefined) {
    contents.Name = data["Name"];
  }
  if (data["NextMarker"] !== undefined) {
    contents.NextMarker = data["NextMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = data["StorageClass"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      response = {
        ...(await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListObjectsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectsV2CommandError(output, context);
  }
  const contents: ListObjectsV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    CommonPrefixes: undefined,
    Contents: undefined,
    ContinuationToken: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    KeyCount: undefined,
    MaxKeys: undefined,
    Name: undefined,
    NextContinuationToken: undefined,
    NextMarker: undefined,
    Prefix: undefined,
    StartAfter: undefined,
    StorageClass: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.Contents === "") {
    contents.Contents = [];
  }
  if (data["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlObjectList(__getArrayIfSingleItem(data["Contents"]), context);
  }
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["KeyCount"] !== undefined) {
    contents.KeyCount = parseInt(data["KeyCount"]);
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(data["MaxKeys"]);
  }
  if (data["Name"] !== undefined) {
    contents.Name = data["Name"];
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  if (data["NextMarker"] !== undefined) {
    contents.NextMarker = data["NextMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  if (data["StartAfter"] !== undefined) {
    contents.StartAfter = data["StartAfter"];
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = data["StorageClass"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListObjectsV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      response = {
        ...(await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListObjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectVersionsCommandError(output, context);
  }
  const contents: ListObjectVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CommonPrefixes: undefined,
    DeleteMarkers: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    KeyMarker: undefined,
    MaxKeys: undefined,
    Name: undefined,
    NextKeyMarker: undefined,
    NextVersionIdMarker: undefined,
    Prefix: undefined,
    StorageClass: undefined,
    VersionIdMarker: undefined,
    Versions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.DeleteMarker === "") {
    contents.DeleteMarkers = [];
  }
  if (data["DeleteMarker"] !== undefined) {
    contents.DeleteMarkers = deserializeAws_restXmlDeleteMarkers(__getArrayIfSingleItem(data["DeleteMarker"]), context);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["KeyMarker"] !== undefined) {
    contents.KeyMarker = data["KeyMarker"];
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(data["MaxKeys"]);
  }
  if (data["Name"] !== undefined) {
    contents.Name = data["Name"];
  }
  if (data["NextKeyMarker"] !== undefined) {
    contents.NextKeyMarker = data["NextKeyMarker"];
  }
  if (data["NextVersionIdMarker"] !== undefined) {
    contents.NextVersionIdMarker = data["NextVersionIdMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = data["StorageClass"];
  }
  if (data["VersionIdMarker"] !== undefined) {
    contents.VersionIdMarker = data["VersionIdMarker"];
  }
  if (data.Version === "") {
    contents.Versions = [];
  }
  if (data["Version"] !== undefined) {
    contents.Versions = deserializeAws_restXmlObjectVersionList(__getArrayIfSingleItem(data["Version"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListObjectVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListPartsCommandError(output, context);
  }
  const contents: ListPartsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AbortDate: undefined,
    AbortRuleId: undefined,
    Bucket: undefined,
    Initiator: undefined,
    IsTruncated: undefined,
    Key: undefined,
    MaxParts: undefined,
    NextPartNumberMarker: undefined,
    Owner: undefined,
    PartNumberMarker: undefined,
    Parts: undefined,
    RequestCharged: undefined,
    StorageClass: undefined,
    UploadId: undefined,
  };
  if (output.headers["x-amz-abort-date"] !== undefined) {
    contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
  }
  if (output.headers["x-amz-abort-rule-id"] !== undefined) {
    contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data["Initiator"] !== undefined) {
    contents.Initiator = deserializeAws_restXmlInitiator(data["Initiator"], context);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["Key"] !== undefined) {
    contents.Key = data["Key"];
  }
  if (data["MaxParts"] !== undefined) {
    contents.MaxParts = parseInt(data["MaxParts"]);
  }
  if (data["NextPartNumberMarker"] !== undefined) {
    contents.NextPartNumberMarker = data["NextPartNumberMarker"];
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  if (data["PartNumberMarker"] !== undefined) {
    contents.PartNumberMarker = data["PartNumberMarker"];
  }
  if (data.Part === "") {
    contents.Parts = [];
  }
  if (data["Part"] !== undefined) {
    contents.Parts = deserializeAws_restXmlParts(__getArrayIfSingleItem(data["Part"]), context);
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = data["StorageClass"];
  }
  if (data["UploadId"] !== undefined) {
    contents.UploadId = data["UploadId"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlMozObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MozObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlMozObjectsCommandError(output, context);
  }
  const contents: MozObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlMozObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MozObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPostBucketRestoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostBucketRestoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPostBucketRestoreCommandError(output, context);
  }
  const contents: PostBucketRestoreCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPostBucketRestoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostBucketRestoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPostBucketTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostBucketTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPostBucketTrashCommandError(output, context);
  }
  const contents: PostBucketTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPostBucketTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostBucketTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: PutBucketAccelerateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAclCommandError(output, context);
  }
  const contents: PutBucketAclCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketAdrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAdrCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAdrCommandError(output, context);
  }
  const contents: PutBucketAdrCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketAdrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAdrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: PutBucketAnalyticsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketBtsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketBtsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketBtsCommandError(output, context);
  }
  const contents: PutBucketBtsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketBtsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketBtsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketCompressionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCompressionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketCompressionConfigurationCommandError(output, context);
  }
  const contents: PutBucketCompressionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketCompressionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCompressionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketCorsCommandError(output, context);
  }
  const contents: PutBucketCorsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketEncryptionCommandError(output, context);
  }
  const contents: PutBucketEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: PutBucketIntelligentTieringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: PutBucketInventoryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: PutBucketLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketLoggingCommandError(output, context);
  }
  const contents: PutBucketLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketMetadataCommandError(output, context);
  }
  const contents: PutBucketMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: PutBucketMetricsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: PutBucketNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketOwnershipControlsCommandError(output, context);
  }
  const contents: PutBucketOwnershipControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketPolicyCommandError(output, context);
  }
  const contents: PutBucketPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketQoSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketQoSCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketQoSCommandError(output, context);
  }
  const contents: PutBucketQoSCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketQoSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketQoSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketQuotaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketQuotaCommandError(output, context);
  }
  const contents: PutBucketQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketRedundancyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRedundancyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketRedundancyCommandError(output, context);
  }
  const contents: PutBucketRedundancyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketRedundancyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRedundancyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketReplicationCommandError(output, context);
  }
  const contents: PutBucketReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketRequestPaymentCommandError(output, context);
  }
  const contents: PutBucketRequestPaymentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketSnapshotCommandError(output, context);
  }
  const contents: PutBucketSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketSnapshotDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketSnapshotDescriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketSnapshotDescriptionCommandError(output, context);
  }
  const contents: PutBucketSnapshotDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketSnapshotDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketSnapshotDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketStatisticCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketStatisticCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketStatisticCommandError(output, context);
  }
  const contents: PutBucketStatisticCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketStatisticCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketStatisticCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketStorageClassCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketStorageClassCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketStorageClassCommandError(output, context);
  }
  const contents: PutBucketStorageClassCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketStorageClassCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketStorageClassCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketTaggingCommandError(output, context);
  }
  const contents: PutBucketTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketTrashCommandError(output, context);
  }
  const contents: PutBucketTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketVersioningCommandError(output, context);
  }
  const contents: PutBucketVersioningCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketWebsiteCommandError(output, context);
  }
  const contents: PutBucketWebsiteCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutDedupConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedupConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutDedupConfigurationCommandError(output, context);
  }
  const contents: PutDedupConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutDedupConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedupConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutMetaSearchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetaSearchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutMetaSearchConfigurationCommandError(output, context);
  }
  const contents: PutMetaSearchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutMetaSearchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetaSearchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectCommandError(output, context);
  }
  const contents: PutObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    BucketKeyEnabled: undefined,
    ETag: undefined,
    Expiration: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSEncryptionContext: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
    contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectAclCommandError(output, context);
  }
  const contents: PutObjectAclCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectLegalHoldCommandError(output, context);
  }
  const contents: PutObjectLegalHoldCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectLockConfigurationCommandError(output, context);
  }
  const contents: PutObjectLockConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectMetadataCommandError(output, context);
  }
  const contents: PutObjectMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectRetentionCommandError(output, context);
  }
  const contents: PutObjectRetentionCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectSymlinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectSymlinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectSymlinkCommandError(output, context);
  }
  const contents: PutObjectSymlinkCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectSymlinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectSymlinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectTaggingCommandError(output, context);
  }
  const contents: PutObjectTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    VersionId: undefined,
  };
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectWORMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectWORMCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectWORMCommandError(output, context);
  }
  const contents: PutObjectWORMCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectWORMCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectWORMCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutOSCPConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOSCPConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutOSCPConfigurationCommandError(output, context);
  }
  const contents: PutOSCPConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutOSCPConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOSCPConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context);
  }
  const contents: PutPublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutRefererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRefererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutRefererCommandError(output, context);
  }
  const contents: PutRefererCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutRefererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRefererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutWORMConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWORMConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutWORMConfigurationCommandError(output, context);
  }
  const contents: PutWORMConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutWORMConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWORMConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutWORMRetainPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWORMRetainPeriodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutWORMRetainPeriodCommandError(output, context);
  }
  const contents: PutWORMRetainPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutWORMRetainPeriodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWORMRetainPeriodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlRestoreBucketObjsTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBucketObjsTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlRestoreBucketObjsTrashCommandError(output, context);
  }
  const contents: RestoreBucketObjsTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
    Errors: undefined,
    Restored: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Error === "") {
    contents.Errors = [];
  }
  if (data["Error"] !== undefined) {
    contents.Errors = deserializeAws_restXmlErrors(__getArrayIfSingleItem(data["Error"]), context);
  }
  if (data.Restored === "") {
    contents.Restored = [];
  }
  if (data["Restored"] !== undefined) {
    contents.Restored = deserializeAws_restXmlDeletedObjects(__getArrayIfSingleItem(data["Restored"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlRestoreBucketObjsTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBucketObjsTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlRestoreBucketObjTrashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBucketObjTrashCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlRestoreBucketObjTrashCommandError(output, context);
  }
  const contents: RestoreBucketObjTrashCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlRestoreBucketObjTrashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBucketObjTrashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlRestoreObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlRestoreObjectCommandError(output, context);
  }
  const contents: RestoreObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
    RestoreOutputPath: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-restore-output-path"] !== undefined) {
    contents.RestoreOutputPath = output.headers["x-amz-restore-output-path"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlRestoreObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      response = {
        ...(await deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlRollbackSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlRollbackSnapshotCommandError(output, context);
  }
  const contents: RollbackSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlRollbackSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlSelectObjectContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlSelectObjectContentCommandError(output, context);
  }
  const contents: SelectObjectContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Payload: undefined,
  };
  const data: any = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
    const eventName = Object.keys(event)[0];
    const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
      accummulator[curr[0]] = curr[1].value;
      return accummulator;
    }, {} as { [key: string]: any });
    const eventMessage = {
      headers: eventHeaders,
      body: event[eventName].body,
    };
    const parsedEvent = {
      [eventName]: eventMessage,
    };
    return await deserializeAws_restXmlSelectObjectContentEventStream_event(parsedEvent, context);
  });
  contents.Payload = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlSelectObjectContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateAgentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateAgentConfigCommandError(output, context);
  }
  const contents: UpdateAgentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateAgentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateSnapshotCommandError(output, context);
  }
  const contents: UpdateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUploadPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUploadPartCommandError(output, context);
  }
  const contents: UploadPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    BucketKeyEnabled: undefined,
    ETag: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
  };
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUploadPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUploadPartCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUploadPartCopyCommandError(output, context);
  }
  const contents: UploadPartCopyCommandOutput = {
    $metadata: deserializeMetadata(output),
    BucketKeyEnabled: undefined,
    CopyPartResult: undefined,
    CopySourceVersionId: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
  };
  if (output.headers["x-amz-copy-source-version-id"] !== undefined) {
    contents.CopySourceVersionId = output.headers["x-amz-copy-source-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-bucket-key-enabled"] !== undefined) {
    contents.BucketKeyEnabled = output.headers["x-amz-server-side-encryption-bucket-key-enabled"] === "true";
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  contents.CopyPartResult = deserializeAws_restXmlCopyPartResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUploadPartCopyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restXmlSelectObjectContentEventStream_event = async (
  output: any,
  context: __SerdeContext
): Promise<SelectObjectContentEventStream> => {
  if (output["Records"] !== undefined) {
    return {
      Records: await deserializeAws_restXmlRecordsEvent_event(output["Records"], context),
    };
  }
  if (output["Stats"] !== undefined) {
    return {
      Stats: await deserializeAws_restXmlStatsEvent_event(output["Stats"], context),
    };
  }
  if (output["Progress"] !== undefined) {
    return {
      Progress: await deserializeAws_restXmlProgressEvent_event(output["Progress"], context),
    };
  }
  if (output["Cont"] !== undefined) {
    return {
      Cont: await deserializeAws_restXmlContinuationEvent_event(output["Cont"], context),
    };
  }
  if (output["End"] !== undefined) {
    return {
      End: await deserializeAws_restXmlEndEvent_event(output["End"], context),
    };
  }
  return { $unknown: output };
};
const deserializeAws_restXmlContinuationEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ContinuationEvent> => {
  let contents: ContinuationEvent = {} as any;
  return contents;
};
const deserializeAws_restXmlEndEvent_event = async (output: any, context: __SerdeContext): Promise<EndEvent> => {
  let contents: EndEvent = {} as any;
  return contents;
};
const deserializeAws_restXmlProgressEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ProgressEvent> => {
  let contents: ProgressEvent = {} as any;
  contents.Details = await parseBody(output.body, context);
  return contents;
};
const deserializeAws_restXmlRecordsEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<RecordsEvent> => {
  let contents: RecordsEvent = {} as any;
  contents.Payload = output.body;
  return contents;
};
const deserializeAws_restXmlStatsEvent_event = async (output: any, context: __SerdeContext): Promise<StatsEvent> => {
  let contents: StatsEvent = {} as any;
  contents.Details = await parseBody(output.body, context);
  return contents;
};
const deserializeAws_restXmlBucketAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyExists> => {
  const contents: BucketAlreadyExists = {
    name: "BucketAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyOwnedByYou> => {
  const contents: BucketAlreadyOwnedByYou = {
    name: "BucketAlreadyOwnedByYou",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlInvalidObjectStateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidObjectState> => {
  const contents: InvalidObjectState = {
    name: "InvalidObjectState",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    AccessTier: undefined,
    StorageClass: undefined,
  };
  const data: any = parsedOutput.body;
  if (data["AccessTier"] !== undefined) {
    contents.AccessTier = data["AccessTier"];
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = data["StorageClass"];
  }
  return contents;
};

const deserializeAws_restXmlNoSuchBucketResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchBucket> => {
  const contents: NoSuchBucket = {
    name: "NoSuchBucket",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlNoSuchKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchKey> => {
  const contents: NoSuchKey = {
    name: "NoSuchKey",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlNoSuchUploadResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchUpload> => {
  const contents: NoSuchUpload = {
    name: "NoSuchUpload",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectAlreadyInActiveTierError> => {
  const contents: ObjectAlreadyInActiveTierError = {
    name: "ObjectAlreadyInActiveTierError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlObjectNotInActiveTierErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotInActiveTierError> => {
  const contents: ObjectNotInActiveTierError = {
    name: "ObjectNotInActiveTierError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const serializeAws_restXmlAbortIncompleteMultipartUpload = (
  input: AbortIncompleteMultipartUpload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AbortIncompleteMultipartUpload");
  if (input.DaysAfterInitiation !== undefined && input.DaysAfterInitiation !== null) {
    const node = new __XmlNode("DatesAfterInitiation")
      .addChildNode(new __XmlText(String(input.DaysAfterInitiation)))
      .withName("DaysAfterInitiation");
    bodyNode.addChildNode(node);
  }
  if (input.HoursAfterInitiation !== undefined && input.HoursAfterInitiation !== null) {
    const node = new __XmlNode("DatesAfterInitiation")
      .addChildNode(new __XmlText(String(input.HoursAfterInitiation)))
      .withName("HoursAfterInitiation");
    bodyNode.addChildNode(node);
  }
  if (input.MinutesAfterInitiation !== undefined && input.MinutesAfterInitiation !== null) {
    const node = new __XmlNode("DatesAfterInitiation")
      .addChildNode(new __XmlText(String(input.MinutesAfterInitiation)))
      .withName("MinutesAfterInitiation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccelerateConfiguration = (input: AccelerateConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccelerateConfiguration");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("BucketAccelerateStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccessControlPolicy = (input: AccessControlPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccessControlPolicy");
  if (input.Grants !== undefined && input.Grants !== null) {
    const nodes = serializeAws_restXmlGrants(input.Grants, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Owner !== undefined && input.Owner !== null) {
    const node = serializeAws_restXmlOwner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccessControlTranslation = (
  input: AccessControlTranslation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AccessControlTranslation");
  if (input.Owner !== undefined && input.Owner !== null) {
    const node = new __XmlNode("OwnerOverride").addChildNode(new __XmlText(input.Owner)).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAdrCacheConfiguration = (input: AdrCacheConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AdrCacheConfiguration");
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Hours !== undefined && input.Hours !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Hours))).withName("Hours");
    bodyNode.addChildNode(node);
  }
  if (input.Minutes !== undefined && input.Minutes !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("StringType").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.RangeCacheEnabled !== undefined && input.RangeCacheEnabled !== null) {
    const node = new __XmlNode("booleanType")
      .addChildNode(new __XmlText(String(input.RangeCacheEnabled)))
      .withName("RangeCacheEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAdrRule = (input: AdrRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AdrRule");
  if (input.Platform !== undefined && input.Platform !== null) {
    const node = new __XmlNode("StringType").addChildNode(new __XmlText(input.Platform)).withName("Platform");
    bodyNode.addChildNode(node);
  }
  if (input.Mode !== undefined && input.Mode !== null) {
    const node = new __XmlNode("StringType").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.CacheConfiguration !== undefined && input.CacheConfiguration !== null) {
    const node = serializeAws_restXmlAdrCacheConfiguration(input.CacheConfiguration, context).withName(
      "CacheConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAdrRules = (input: AdrRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlAdrRule(entry, context);
      return node.withName("Rule");
    });
};

const serializeAws_restXmlAllowedHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("AllowedHeader").addChildNode(new __XmlText(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlAllowedMethods = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("AllowedMethod").addChildNode(new __XmlText(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlAllowedOrigins = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("AllowedOrigin").addChildNode(new __XmlText(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlAnalyticsAndOperator = (input: AnalyticsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsAndOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsConfiguration = (input: AnalyticsConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsConfiguration");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("AnalyticsId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlAnalyticsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClassAnalysis !== undefined && input.StorageClassAnalysis !== null) {
    const node = serializeAws_restXmlStorageClassAnalysis(input.StorageClassAnalysis, context).withName(
      "StorageClassAnalysis"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsExportDestination = (
  input: AnalyticsExportDestination,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AnalyticsExportDestination");
  if (input.S3BucketDestination !== undefined && input.S3BucketDestination !== null) {
    const node = serializeAws_restXmlAnalyticsS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsFilter = (input: AnalyticsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsFilter");
  AnalyticsFilter.visit(input, {
    Prefix: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = serializeAws_restXmlAnalyticsAndOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

const serializeAws_restXmlAnalyticsS3BucketDestination = (
  input: AnalyticsS3BucketDestination,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AnalyticsS3BucketDestination");
  if (input.Format !== undefined && input.Format !== null) {
    const node = new __XmlNode("AnalyticsS3ExportFileFormat")
      .addChildNode(new __XmlText(input.Format))
      .withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.BucketAccountId !== undefined && input.BucketAccountId !== null) {
    const node = new __XmlNode("AccountId")
      .addChildNode(new __XmlText(input.BucketAccountId))
      .withName("BucketAccountId");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlArchiveDirectReadConfiguration = (
  input: ArchiveDirectReadConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ArchiveDirectReadConfiguration");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("StringType").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("booleanType").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Mode !== undefined && input.Mode !== null) {
    const node = new __XmlNode("StringType").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.CacheConfiguration !== undefined && input.CacheConfiguration !== null) {
    const node = serializeAws_restXmlAdrCacheConfiguration(input.CacheConfiguration, context).withName(
      "CacheConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Rules !== undefined && input.Rules !== null) {
    const nodes = serializeAws_restXmlAdrRules(input.Rules, context);
    const containerNode = new __XmlNode("Rules");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlBatchRestoreRequest = (input: BatchRestoreRequest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BatchRestoreRequest");
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Hours !== undefined && input.Hours !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Hours))).withName("Hours");
    bodyNode.addChildNode(node);
  }
  if (input.Minutes !== undefined && input.Minutes !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.Tier !== undefined && input.Tier !== null) {
    const node = new __XmlNode("Tier").addChildNode(new __XmlText(input.Tier)).withName("Tier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBlackList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("Referer").addChildNode(new __XmlText(entry));
      return node.withName("Referer");
    });
};

const serializeAws_restXmlBucketCompressionConfiguration = (
  input: BucketCompressionConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("BucketCompressionConfiguration");
  if (input.Mode !== undefined && input.Mode !== null) {
    const node = new __XmlNode("CompressionStr").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("CompressionStr").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.MinSize !== undefined && input.MinSize !== null) {
    const node = new __XmlNode("CompressionNum").addChildNode(new __XmlText(String(input.MinSize))).withName("MinSize");
    bodyNode.addChildNode(node);
  }
  if (input.Rule !== undefined && input.Rule !== null) {
    const node = serializeAws_restXmlCompressionRule(input.Rule, context).withName("Rule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBucketLifecycleConfiguration = (
  input: BucketLifecycleConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("BucketLifecycleConfiguration");
  if (input.Rules !== undefined && input.Rules !== null) {
    const nodes = serializeAws_restXmlLifecycleRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBucketLoggingStatus = (input: BucketLoggingStatus, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketLoggingStatus");
  if (input.LoggingEnabled !== undefined && input.LoggingEnabled !== null) {
    const node = serializeAws_restXmlLoggingEnabled(input.LoggingEnabled, context).withName("LoggingEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBucketObjsTrashInfo = (input: BucketObjsTrashInfo, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketObjsTrashInfo");
  if (input.Policy !== undefined && input.Policy !== null) {
    const node = new __XmlNode("BucketTrashPolicy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
    bodyNode.addChildNode(node);
  }
  if (input.Objects !== undefined && input.Objects !== null) {
    const nodes = serializeAws_restXmlBucketTrashObjList(input.Objects, context);
    nodes.map((node: any) => {
      node = node.withName("Object");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Quiet !== undefined && input.Quiet !== null) {
    const node = new __XmlNode("Quiet").addChildNode(new __XmlText(String(input.Quiet))).withName("Quiet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBucketTrashObj = (input: BucketTrashObj, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketTrashObj");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("ObjectKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Token !== undefined && input.Token !== null) {
    const node = new __XmlNode("ObjectLockToken").addChildNode(new __XmlText(input.Token)).withName("Token");
    bodyNode.addChildNode(node);
  }
  if (input.LastModified !== undefined && input.LastModified !== null) {
    const node = new __XmlNode("LastModified")
      .addChildNode(new __XmlText(input.LastModified.toISOString().split(".")[0] + "Z"))
      .withName("LastModified");
    bodyNode.addChildNode(node);
  }
  if (input.DeletedTime !== undefined && input.DeletedTime !== null) {
    const node = new __XmlNode("LastModified")
      .addChildNode(new __XmlText(input.DeletedTime.toISOString().split(".")[0] + "Z"))
      .withName("DeletedTime");
    bodyNode.addChildNode(node);
  }
  if (input.Size !== undefined && input.Size !== null) {
    const node = new __XmlNode("Size").addChildNode(new __XmlText(String(input.Size))).withName("Size");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("ObjectStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    const node = new __XmlNode("ObjectVersionId").addChildNode(new __XmlText(input.VersionId)).withName("VersionId");
    bodyNode.addChildNode(node);
  }
  if (input.Owner !== undefined && input.Owner !== null) {
    const node = serializeAws_restXmlOwner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBucketTrashObjList = (input: BucketTrashObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlBucketTrashObj(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlCompletedMultipartUpload = (
  input: CompletedMultipartUpload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CompletedMultipartUpload");
  if (input.Parts !== undefined && input.Parts !== null) {
    const nodes = serializeAws_restXmlCompletedPartList(input.Parts, context);
    nodes.map((node: any) => {
      node = node.withName("Part");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlCompletedPart = (input: CompletedPart, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CompletedPart");
  if (input.ETag !== undefined && input.ETag !== null) {
    const node = new __XmlNode("ETag").addChildNode(new __XmlText(input.ETag)).withName("ETag");
    bodyNode.addChildNode(node);
  }
  if (input.PartNumber !== undefined && input.PartNumber !== null) {
    const node = new __XmlNode("PartNumber")
      .addChildNode(new __XmlText(String(input.PartNumber)))
      .withName("PartNumber");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCompletedPartList = (input: CompletedPart[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlCompletedPart(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlCompress = (input: Compress, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Compress");
  if (input.Objects !== undefined && input.Objects !== null) {
    const nodes = serializeAws_restXmlObjectIdentifierList(input.Objects, context);
    nodes.map((node: any) => {
      node = node.withName("Object");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Archive !== undefined && input.Archive !== null) {
    const node = new __XmlNode("StringType").addChildNode(new __XmlText(input.Archive)).withName("Archive");
    bodyNode.addChildNode(node);
  }
  if (input.FailedQuit !== undefined && input.FailedQuit !== null) {
    const node = new __XmlNode("booleanType")
      .addChildNode(new __XmlText(String(input.FailedQuit)))
      .withName("FailedQuit");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCompressionRule = (input: CompressionRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CompressionRule");
  if (input.CompressFilter !== undefined && input.CompressFilter !== null) {
    const node = serializeAws_restXmlNotOrCompressFilter(input.CompressFilter, context).withName("CompressFilter");
    bodyNode.addChildNode(node);
  }
  if (input.NotCompressFilter !== undefined && input.NotCompressFilter !== null) {
    const node = serializeAws_restXmlNotOrCompressFilter(input.NotCompressFilter, context).withName(
      "NotCompressFilter"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCondition = (input: Condition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Condition");
  if (input.HttpErrorCodeReturnedEquals !== undefined && input.HttpErrorCodeReturnedEquals !== null) {
    const node = new __XmlNode("HttpErrorCodeReturnedEquals")
      .addChildNode(new __XmlText(input.HttpErrorCodeReturnedEquals))
      .withName("HttpErrorCodeReturnedEquals");
    bodyNode.addChildNode(node);
  }
  if (input.KeyPrefixEquals !== undefined && input.KeyPrefixEquals !== null) {
    const node = new __XmlNode("KeyPrefixEquals")
      .addChildNode(new __XmlText(input.KeyPrefixEquals))
      .withName("KeyPrefixEquals");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCORSConfiguration = (input: CORSConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CORSConfiguration");
  if (input.CORSRules !== undefined && input.CORSRules !== null) {
    const nodes = serializeAws_restXmlCORSRules(input.CORSRules, context);
    nodes.map((node: any) => {
      node = node.withName("CORSRule");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCORSRule = (input: CORSRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CORSRule");
  if (input.AllowedHeaders !== undefined && input.AllowedHeaders !== null) {
    const nodes = serializeAws_restXmlAllowedHeaders(input.AllowedHeaders, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedHeader");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedMethods !== undefined && input.AllowedMethods !== null) {
    const nodes = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedMethod");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedOrigins !== undefined && input.AllowedOrigins !== null) {
    const nodes = serializeAws_restXmlAllowedOrigins(input.AllowedOrigins, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedOrigin");
      bodyNode.addChildNode(node);
    });
  }
  if (input.ExposeHeaders !== undefined && input.ExposeHeaders !== null) {
    const nodes = serializeAws_restXmlExposeHeaders(input.ExposeHeaders, context);
    nodes.map((node: any) => {
      node = node.withName("ExposeHeader");
      bodyNode.addChildNode(node);
    });
  }
  if (input.MaxAgeSeconds !== undefined && input.MaxAgeSeconds !== null) {
    const node = new __XmlNode("MaxAgeSeconds")
      .addChildNode(new __XmlText(String(input.MaxAgeSeconds)))
      .withName("MaxAgeSeconds");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCORSRules = (input: CORSRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlCORSRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlCreateBucketConfiguration = (
  input: CreateBucketConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CreateBucketConfiguration");
  if (input.LocationConstraint !== undefined && input.LocationConstraint !== null) {
    const node = new __XmlNode("BucketLocationConstraint")
      .addChildNode(new __XmlText(input.LocationConstraint))
      .withName("LocationConstraint");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCSVInput = (input: CSVInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CSVInput");
  if (input.FileHeaderInfo !== undefined && input.FileHeaderInfo !== null) {
    const node = new __XmlNode("FileHeaderInfo")
      .addChildNode(new __XmlText(input.FileHeaderInfo))
      .withName("FileHeaderInfo");
    bodyNode.addChildNode(node);
  }
  if (input.Comments !== undefined && input.Comments !== null) {
    const node = new __XmlNode("Comments").addChildNode(new __XmlText(input.Comments)).withName("Comments");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteEscapeCharacter !== undefined && input.QuoteEscapeCharacter !== null) {
    const node = new __XmlNode("QuoteEscapeCharacter")
      .addChildNode(new __XmlText(input.QuoteEscapeCharacter))
      .withName("QuoteEscapeCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.RecordDelimiter !== undefined && input.RecordDelimiter !== null) {
    const node = new __XmlNode("RecordDelimiter")
      .addChildNode(new __XmlText(input.RecordDelimiter))
      .withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.FieldDelimiter !== undefined && input.FieldDelimiter !== null) {
    const node = new __XmlNode("FieldDelimiter")
      .addChildNode(new __XmlText(input.FieldDelimiter))
      .withName("FieldDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteCharacter !== undefined && input.QuoteCharacter !== null) {
    const node = new __XmlNode("QuoteCharacter")
      .addChildNode(new __XmlText(input.QuoteCharacter))
      .withName("QuoteCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.AllowQuotedRecordDelimiter !== undefined && input.AllowQuotedRecordDelimiter !== null) {
    const node = new __XmlNode("AllowQuotedRecordDelimiter")
      .addChildNode(new __XmlText(String(input.AllowQuotedRecordDelimiter)))
      .withName("AllowQuotedRecordDelimiter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CSVOutput");
  if (input.QuoteFields !== undefined && input.QuoteFields !== null) {
    const node = new __XmlNode("QuoteFields").addChildNode(new __XmlText(input.QuoteFields)).withName("QuoteFields");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteEscapeCharacter !== undefined && input.QuoteEscapeCharacter !== null) {
    const node = new __XmlNode("QuoteEscapeCharacter")
      .addChildNode(new __XmlText(input.QuoteEscapeCharacter))
      .withName("QuoteEscapeCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.RecordDelimiter !== undefined && input.RecordDelimiter !== null) {
    const node = new __XmlNode("RecordDelimiter")
      .addChildNode(new __XmlText(input.RecordDelimiter))
      .withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.FieldDelimiter !== undefined && input.FieldDelimiter !== null) {
    const node = new __XmlNode("FieldDelimiter")
      .addChildNode(new __XmlText(input.FieldDelimiter))
      .withName("FieldDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteCharacter !== undefined && input.QuoteCharacter !== null) {
    const node = new __XmlNode("QuoteCharacter")
      .addChildNode(new __XmlText(input.QuoteCharacter))
      .withName("QuoteCharacter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDedupConfiguration = (input: DedupConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DedupConfiguration");
  if (input.Region !== undefined && input.Region !== null) {
    const node = new __XmlNode("Region").addChildNode(new __XmlText(input.Region)).withName("Region");
    bodyNode.addChildNode(node);
  }
  if (input.CompareByte !== undefined && input.CompareByte !== null) {
    const node = new __XmlNode("CompareByte")
      .addChildNode(new __XmlText(String(input.CompareByte)))
      .withName("CompareByte");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDedupStatReq = (input: DedupStatReq, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DedupStatReq");
  if (input.Region !== undefined && input.Region !== null) {
    const node = new __XmlNode("StringType").addChildNode(new __XmlText(input.Region)).withName("Region");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Value))).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDefaultRetention = (input: DefaultRetention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DefaultRetention");
  if (input.Mode !== undefined && input.Mode !== null) {
    const node = new __XmlNode("ObjectLockRetentionMode").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Years !== undefined && input.Years !== null) {
    const node = new __XmlNode("Years").addChildNode(new __XmlText(String(input.Years))).withName("Years");
    bodyNode.addChildNode(node);
  }
  if (input.Months !== undefined && input.Months !== null) {
    const node = new __XmlNode("Months").addChildNode(new __XmlText(String(input.Months))).withName("Months");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDelete = (input: Delete, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Delete");
  if (input.Objects !== undefined && input.Objects !== null) {
    const nodes = serializeAws_restXmlObjectIdentifierList(input.Objects, context);
    nodes.map((node: any) => {
      node = node.withName("Object");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Quiet !== undefined && input.Quiet !== null) {
    const node = new __XmlNode("Quiet").addChildNode(new __XmlText(String(input.Quiet))).withName("Quiet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDeleteMarkerReplication = (input: DeleteMarkerReplication, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DeleteMarkerReplication");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("DeleteMarkerReplicationStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDestination = (input: Destination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Destination");
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Account !== undefined && input.Account !== null) {
    const node = new __XmlNode("AccountId").addChildNode(new __XmlText(input.Account)).withName("Account");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlTranslation !== undefined && input.AccessControlTranslation !== null) {
    const node = serializeAws_restXmlAccessControlTranslation(input.AccessControlTranslation, context).withName(
      "AccessControlTranslation"
    );
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionConfiguration !== undefined && input.EncryptionConfiguration !== null) {
    const node = serializeAws_restXmlEncryptionConfiguration(input.EncryptionConfiguration, context).withName(
      "EncryptionConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ReplicationTime !== undefined && input.ReplicationTime !== null) {
    const node = serializeAws_restXmlReplicationTime(input.ReplicationTime, context).withName("ReplicationTime");
    bodyNode.addChildNode(node);
  }
  if (input.Metrics !== undefined && input.Metrics !== null) {
    const node = serializeAws_restXmlMetrics(input.Metrics, context).withName("Metrics");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDomainNameList = (input: DomainNames[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlDomainNames(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlDomainNames = (input: DomainNames, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DomainNames");
  if (input.DomainName !== undefined && input.DomainName !== null) {
    const node = new __XmlNode("DomainName").addChildNode(new __XmlText(input.DomainName)).withName("DomainName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryption = (input: Encryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Encryption");
  if (input.EncryptionType !== undefined && input.EncryptionType !== null) {
    const node = new __XmlNode("ServerSideEncryption")
      .addChildNode(new __XmlText(input.EncryptionType))
      .withName("EncryptionType");
    bodyNode.addChildNode(node);
  }
  if (input.KMSKeyId !== undefined && input.KMSKeyId !== null) {
    const node = new __XmlNode("SSEKMSKeyId").addChildNode(new __XmlText(input.KMSKeyId)).withName("KMSKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.KMSContext !== undefined && input.KMSContext !== null) {
    const node = new __XmlNode("KMSContext").addChildNode(new __XmlText(input.KMSContext)).withName("KMSContext");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionConfiguration");
  if (input.ReplicaKmsKeyID !== undefined && input.ReplicaKmsKeyID !== null) {
    const node = new __XmlNode("ReplicaKmsKeyID")
      .addChildNode(new __XmlText(input.ReplicaKmsKeyID))
      .withName("ReplicaKmsKeyID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlErrorDocument = (input: ErrorDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ErrorDocument");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("ObjectKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEventList = (input: (Event | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("Event").addChildNode(new __XmlText(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlExistingObjectReplication = (
  input: ExistingObjectReplication,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ExistingObjectReplication");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("ExistingObjectReplicationStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlExposeHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("ExposeHeader").addChildNode(new __XmlText(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlFilterRule = (input: FilterRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FilterRule");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("FilterRuleName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("FilterRuleValue").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlFilterRuleList = (input: FilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlFilterRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlGlacierJobParameters = (input: GlacierJobParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GlacierJobParameters");
  if (input.Tier !== undefined && input.Tier !== null) {
    const node = new __XmlNode("Tier").addChildNode(new __XmlText(input.Tier)).withName("Tier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlGrant = (input: Grant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Grant");
  if (input.Grantee !== undefined && input.Grantee !== null) {
    const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
    node.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    bodyNode.addChildNode(node);
  }
  if (input.Permission !== undefined && input.Permission !== null) {
    const node = new __XmlNode("Permission").addChildNode(new __XmlText(input.Permission)).withName("Permission");
    bodyNode.addChildNode(node);
  }
  if (input.Delivered !== undefined && input.Delivered !== null) {
    const node = new __XmlNode("Delivered").addChildNode(new __XmlText(String(input.Delivered))).withName("Delivered");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlGrantee = (input: Grantee, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Grantee");
  if (input.DisplayName !== undefined && input.DisplayName !== null) {
    const node = new __XmlNode("DisplayName").addChildNode(new __XmlText(input.DisplayName)).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
    const node = new __XmlNode("EmailAddress").addChildNode(new __XmlText(input.EmailAddress)).withName("EmailAddress");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.URI !== undefined && input.URI !== null) {
    const node = new __XmlNode("URI").addChildNode(new __XmlText(input.URI)).withName("URI");
    bodyNode.addChildNode(node);
  }
  if (input.Type !== undefined && input.Type !== null) {
    bodyNode.addAttribute("xsi:type", input.Type);
  }
  return bodyNode;
};

const serializeAws_restXmlGrants = (input: Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlGrant(entry, context);
      return node.withName("Grant");
    });
};

const serializeAws_restXmlIndexDocument = (input: IndexDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("IndexDocument");
  if (input.Suffix !== undefined && input.Suffix !== null) {
    const node = new __XmlNode("Suffix").addChildNode(new __XmlText(input.Suffix)).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InputSerialization");
  if (input.CSV !== undefined && input.CSV !== null) {
    const node = serializeAws_restXmlCSVInput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  if (input.CompressionType !== undefined && input.CompressionType !== null) {
    const node = new __XmlNode("CompressionType")
      .addChildNode(new __XmlText(input.CompressionType))
      .withName("CompressionType");
    bodyNode.addChildNode(node);
  }
  if (input.JSON !== undefined && input.JSON !== null) {
    const node = serializeAws_restXmlJSONInput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  if (input.Parquet !== undefined && input.Parquet !== null) {
    const node = serializeAws_restXmlParquetInput(input.Parquet, context).withName("Parquet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlIntelligentTieringAndOperator = (
  input: IntelligentTieringAndOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("IntelligentTieringAndOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlIntelligentTieringConfiguration = (
  input: IntelligentTieringConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("IntelligentTieringConfiguration");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("IntelligentTieringId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlIntelligentTieringFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("IntelligentTieringStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Tierings !== undefined && input.Tierings !== null) {
    const nodes = serializeAws_restXmlTieringList(input.Tierings, context);
    nodes.map((node: any) => {
      node = node.withName("Tiering");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlIntelligentTieringFilter = (
  input: IntelligentTieringFilter,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("IntelligentTieringFilter");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag !== undefined && input.Tag !== null) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And !== undefined && input.And !== null) {
    const node = serializeAws_restXmlIntelligentTieringAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryConfiguration = (input: InventoryConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryConfiguration");
  if (input.Destination !== undefined && input.Destination !== null) {
    const node = serializeAws_restXmlInventoryDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
    const node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlInventoryFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("InventoryId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.IncludedObjectVersions !== undefined && input.IncludedObjectVersions !== null) {
    const node = new __XmlNode("InventoryIncludedObjectVersions")
      .addChildNode(new __XmlText(input.IncludedObjectVersions))
      .withName("IncludedObjectVersions");
    bodyNode.addChildNode(node);
  }
  if (input.OptionalFields !== undefined && input.OptionalFields !== null) {
    const nodes = serializeAws_restXmlInventoryOptionalFields(input.OptionalFields, context);
    const containerNode = new __XmlNode("OptionalFields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Schedule !== undefined && input.Schedule !== null) {
    const node = serializeAws_restXmlInventorySchedule(input.Schedule, context).withName("Schedule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryDestination = (input: InventoryDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryDestination");
  if (input.S3BucketDestination !== undefined && input.S3BucketDestination !== null) {
    const node = serializeAws_restXmlInventoryS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryEncryption = (input: InventoryEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryEncryption");
  if (input.SSES3 !== undefined && input.SSES3 !== null) {
    const node = serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3");
    bodyNode.addChildNode(node);
  }
  if (input.SSEKMS !== undefined && input.SSEKMS !== null) {
    const node = serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryFilter");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryOptionalFields = (
  input: (InventoryOptionalField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("InventoryOptionalField").addChildNode(new __XmlText(entry));
      return node.withName("Field");
    });
};

const serializeAws_restXmlInventoryS3BucketDestination = (
  input: InventoryS3BucketDestination,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("InventoryS3BucketDestination");
  if (input.AccountId !== undefined && input.AccountId !== null) {
    const node = new __XmlNode("AccountId").addChildNode(new __XmlText(input.AccountId)).withName("AccountId");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Format !== undefined && input.Format !== null) {
    const node = new __XmlNode("InventoryFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption !== undefined && input.Encryption !== null) {
    const node = serializeAws_restXmlInventoryEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventorySchedule = (input: InventorySchedule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventorySchedule");
  if (input.Frequency !== undefined && input.Frequency !== null) {
    const node = new __XmlNode("InventoryFrequency").addChildNode(new __XmlText(input.Frequency)).withName("Frequency");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJSONInput = (input: JSONInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONInput");
  if (input.Type !== undefined && input.Type !== null) {
    const node = new __XmlNode("JSONType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJSONOutput = (input: JSONOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONOutput");
  if (input.RecordDelimiter !== undefined && input.RecordDelimiter !== null) {
    const node = new __XmlNode("RecordDelimiter")
      .addChildNode(new __XmlText(input.RecordDelimiter))
      .withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionConfiguration = (
  input: LambdaFunctionConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LambdaFunctionConfiguration");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("NotificationId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionArn !== undefined && input.LambdaFunctionArn !== null) {
    const node = new __XmlNode("LambdaFunctionArn")
      .addChildNode(new __XmlText(input.LambdaFunctionArn))
      .withName("CloudFunction");
    bodyNode.addChildNode(node);
  }
  if (input.Events !== undefined && input.Events !== null) {
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionConfigurationList = (
  input: LambdaFunctionConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlLambdaFunctionConfiguration(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlLifecycleAndRuleOperator = (
  input: LifecycleAndRuleOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LifecycleAndRuleOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.PrefixNotMatch !== undefined && input.PrefixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.PrefixNotMatch)).withName("PrefixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.Suffix !== undefined && input.Suffix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Suffix)).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  if (input.SuffixNotMatch !== undefined && input.SuffixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.SuffixNotMatch)).withName("SuffixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThan !== undefined && input.ObjectSizeLessThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThan)))
      .withName("ObjectSizeLessThan");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThanOrEqualTo !== undefined && input.ObjectSizeLessThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThanOrEqualTo)))
      .withName("ObjectSizeLessThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeEqualTo !== undefined && input.ObjectSizeEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeEqualTo)))
      .withName("ObjectSizeEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeBetween !== undefined && input.ObjectSizeBetween !== null) {
    const node = serializeAws_restXmlObjectSizeRange(input.ObjectSizeBetween, context).withName("ObjectSizeBetween");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThanOrEqualTo !== undefined && input.ObjectSizeGreaterThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThanOrEqualTo)))
      .withName("ObjectSizeGreaterThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThan !== undefined && input.ObjectSizeGreaterThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThan)))
      .withName("ObjectSizeGreaterThan");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleExpiration");
  if (input.Date !== undefined && input.Date !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
      .withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Hours !== undefined && input.Hours !== null) {
    const node = new __XmlNode("Hours").addChildNode(new __XmlText(String(input.Hours))).withName("Hours");
    bodyNode.addChildNode(node);
  }
  if (input.Minutes !== undefined && input.Minutes !== null) {
    const node = new __XmlNode("Minutes").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  if (input.ExpiredObjectDeleteMarker !== undefined && input.ExpiredObjectDeleteMarker !== null) {
    const node = new __XmlNode("ExpiredObjectDeleteMarker")
      .addChildNode(new __XmlText(String(input.ExpiredObjectDeleteMarker)))
      .withName("ExpiredObjectDeleteMarker");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleOrRuleOperator = (input: LifecycleOrRuleOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleOrRuleOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.PrefixNotMatch !== undefined && input.PrefixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.PrefixNotMatch)).withName("PrefixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.Suffix !== undefined && input.Suffix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Suffix)).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  if (input.SuffixNotMatch !== undefined && input.SuffixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.SuffixNotMatch)).withName("SuffixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThan !== undefined && input.ObjectSizeLessThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThan)))
      .withName("ObjectSizeLessThan");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThanOrEqualTo !== undefined && input.ObjectSizeLessThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThanOrEqualTo)))
      .withName("ObjectSizeLessThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeEqualTo !== undefined && input.ObjectSizeEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeEqualTo)))
      .withName("ObjectSizeEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeBetween !== undefined && input.ObjectSizeBetween !== null) {
    const node = serializeAws_restXmlObjectSizeRange(input.ObjectSizeBetween, context).withName("ObjectSizeBetween");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThanOrEqualTo !== undefined && input.ObjectSizeGreaterThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThanOrEqualTo)))
      .withName("ObjectSizeGreaterThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThan !== undefined && input.ObjectSizeGreaterThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThan)))
      .withName("ObjectSizeGreaterThan");
    bodyNode.addChildNode(node);
  }
  if (input.Tag !== undefined && input.Tag !== null) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And !== undefined && input.And !== null) {
    const node = serializeAws_restXmlTagMultiInOrMode(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecyclePeriod = (input: LifecyclePeriod, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecyclePeriod");
  if (input.Start !== undefined && input.Start !== null) {
    const node = new __XmlNode("StartAfter").addChildNode(new __XmlText(input.Start)).withName("Start");
    bodyNode.addChildNode(node);
  }
  if (input.End !== undefined && input.End !== null) {
    const node = new __XmlNode("EndBefore").addChildNode(new __XmlText(input.End)).withName("End");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecyclePeriodList = (input: LifecyclePeriod[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlLifecyclePeriod(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlLifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRule");
  if (input.Expiration !== undefined && input.Expiration !== null) {
    const node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
    bodyNode.addChildNode(node);
  }
  if (input.RestoreExpiration !== undefined && input.RestoreExpiration !== null) {
    const node = serializeAws_restXmlRestoreExpiration(input.RestoreExpiration, context).withName("RestoreExpiration");
    bodyNode.addChildNode(node);
  }
  if (input.BucketExpiration !== undefined && input.BucketExpiration !== null) {
    const node = serializeAws_restXmlLifecycleExpiration(input.BucketExpiration, context).withName("BucketExpiration");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("ExpirationStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Transitions !== undefined && input.Transitions !== null) {
    const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
    nodes.map((node: any) => {
      node = node.withName("Transition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.NoncurrentVersionTransitions !== undefined && input.NoncurrentVersionTransitions !== null) {
    const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    nodes.map((node: any) => {
      node = node.withName("NoncurrentVersionTransition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.NoncurrentVersionExpiration !== undefined && input.NoncurrentVersionExpiration !== null) {
    const node = serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName(
      "NoncurrentVersionExpiration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AbortIncompleteMultipartUpload !== undefined && input.AbortIncompleteMultipartUpload !== null) {
    const node = serializeAws_restXmlAbortIncompleteMultipartUpload(
      input.AbortIncompleteMultipartUpload,
      context
    ).withName("AbortIncompleteMultipartUpload");
    bodyNode.addChildNode(node);
  }
  if (input.RunningTimes !== undefined && input.RunningTimes !== null) {
    const node = serializeAws_restXmlLifecycleRunningTimes(input.RunningTimes, context).withName("RunningTime");
    bodyNode.addChildNode(node);
  }
  if (input.DeletedObjectToTrash !== undefined && input.DeletedObjectToTrash !== null) {
    const node = new __XmlNode("booleanType")
      .addChildNode(new __XmlText(String(input.DeletedObjectToTrash)))
      .withName("DeletedObjectToTrash");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRuleFilter");
  LifecycleRuleFilter.visit(input, {
    And: (value) => {
      const node = serializeAws_restXmlLifecycleAndRuleOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    Or: (value) => {
      const node = serializeAws_restXmlLifecycleOrRuleOperator(value, context).withName("Or");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    Prefix: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    PrefixNotMatch: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("PrefixNotMatch");
      bodyNode.addChildNode(node);
    },
    Suffix: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("Suffix");
      bodyNode.addChildNode(node);
    },
    SuffixNotMatch: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("SuffixNotMatch");
      bodyNode.addChildNode(node);
    },
    ObjectSizeLessThan: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeLessThan");
      bodyNode.addChildNode(node);
    },
    ObjectSizeLessThanOrEqualTo: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeLessThanOrEqualTo");
      bodyNode.addChildNode(node);
    },
    ObjectSizeEqualTo: (value) => {
      const node = new __XmlNode("ObjectSize").addChildNode(new __XmlText(String(value))).withName("ObjectSizeEqualTo");
      bodyNode.addChildNode(node);
    },
    ObjectSizeBetween: (value) => {
      const node = serializeAws_restXmlObjectSizeRange(value, context).withName("ObjectSizeBetween");
      bodyNode.addChildNode(node);
    },
    ObjectSizeGreaterThanOrEqualTo: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeGreaterThanOrEqualTo");
      bodyNode.addChildNode(node);
    },
    ObjectSizeGreaterThan: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeGreaterThan");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

const serializeAws_restXmlLifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlLifecycleRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlLifecycleRunningTimes = (input: LifecycleRunningTimes, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRunningTimes");
  if (input.Period !== undefined && input.Period !== null) {
    const nodes = serializeAws_restXmlLifecyclePeriodList(input.Period, context);
    nodes.map((node: any) => {
      node = node.withName("Period");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlLoggingEnabled = (input: LoggingEnabled, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LoggingEnabled");
  if (input.TargetBucket !== undefined && input.TargetBucket !== null) {
    const node = new __XmlNode("TargetBucket").addChildNode(new __XmlText(input.TargetBucket)).withName("TargetBucket");
    bodyNode.addChildNode(node);
  }
  if (input.TargetGrants !== undefined && input.TargetGrants !== null) {
    const nodes = serializeAws_restXmlTargetGrants(input.TargetGrants, context);
    const containerNode = new __XmlNode("TargetGrants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.TargetPrefix !== undefined && input.TargetPrefix !== null) {
    const node = new __XmlNode("TargetPrefix").addChildNode(new __XmlText(input.TargetPrefix)).withName("TargetPrefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetadataEntry = (input: MetadataEntry, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetadataEntry");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("MetadataKey").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("MetadataValue").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetaSearchConfiguration = (input: MetaSearchConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetaSearchConfiguration");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetrics = (input: Metrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Metrics");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("MetricsStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.EventThreshold !== undefined && input.EventThreshold !== null) {
    const node = serializeAws_restXmlReplicationTimeValue(input.EventThreshold, context).withName("EventThreshold");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsAndOperator = (input: MetricsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsAndOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsConfiguration = (input: MetricsConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsConfiguration");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("MetricsId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlMetricsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsFilter = (input: MetricsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsFilter");
  MetricsFilter.visit(input, {
    Prefix: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = serializeAws_restXmlMetricsAndOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

const serializeAws_restXmlMode = (input: Mode, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Mode");
  if (input.NeverExpire !== undefined && input.NeverExpire !== null) {
    const node = new __XmlNode("NeverExpire")
      .addChildNode(new __XmlText(String(input.NeverExpire)))
      .withName("NeverExpire");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNoncurrentVersionExpiration = (
  input: NoncurrentVersionExpiration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NoncurrentVersionExpiration");
  if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
    const node = new __XmlNode("Days")
      .addChildNode(new __XmlText(String(input.NoncurrentDays)))
      .withName("NoncurrentDays");
    bodyNode.addChildNode(node);
  }
  if (input.NoncurrentHours !== undefined && input.NoncurrentHours !== null) {
    const node = new __XmlNode("Hours")
      .addChildNode(new __XmlText(String(input.NoncurrentHours)))
      .withName("NoncurrentHours");
    bodyNode.addChildNode(node);
  }
  if (input.NoncurrentMinutes !== undefined && input.NoncurrentMinutes !== null) {
    const node = new __XmlNode("Minutes")
      .addChildNode(new __XmlText(String(input.NoncurrentMinutes)))
      .withName("NoncurrentMinutes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNoncurrentVersionTransition = (
  input: NoncurrentVersionTransition,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NoncurrentVersionTransition");
  if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
    const node = new __XmlNode("Days")
      .addChildNode(new __XmlText(String(input.NoncurrentDays)))
      .withName("NoncurrentDays");
    bodyNode.addChildNode(node);
  }
  if (input.NoncurrentHours !== undefined && input.NoncurrentHours !== null) {
    const node = new __XmlNode("Hours")
      .addChildNode(new __XmlText(String(input.NoncurrentHours)))
      .withName("NoncurrentHours");
    bodyNode.addChildNode(node);
  }
  if (input.NoncurrentMinutes !== undefined && input.NoncurrentMinutes !== null) {
    const node = new __XmlNode("Minutes")
      .addChildNode(new __XmlText(String(input.NoncurrentMinutes)))
      .withName("NoncurrentMinutes");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("TransitionStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierConfiguration !== undefined && input.GlacierConfiguration !== null) {
    const node = new __XmlNode("StringType")
      .addChildNode(new __XmlText(input.GlacierConfiguration))
      .withName("GlacierConfiguration");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNoncurrentVersionTransitionList = (
  input: NoncurrentVersionTransition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlNoncurrentVersionTransition(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlNotificationConfiguration = (
  input: NotificationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NotificationConfiguration");
  if (input.TopicConfigurations !== undefined && input.TopicConfigurations !== null) {
    const nodes = serializeAws_restXmlTopicConfigurationList(input.TopicConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("TopicConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.QueueConfigurations !== undefined && input.QueueConfigurations !== null) {
    const nodes = serializeAws_restXmlQueueConfigurationList(input.QueueConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("QueueConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.LambdaFunctionConfigurations !== undefined && input.LambdaFunctionConfigurations !== null) {
    const nodes = serializeAws_restXmlLambdaFunctionConfigurationList(input.LambdaFunctionConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("CloudFunctionConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlNotificationConfigurationFilter = (
  input: NotificationConfigurationFilter,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NotificationConfigurationFilter");
  if (input.Key !== undefined && input.Key !== null) {
    const node = serializeAws_restXmlS3KeyFilter(input.Key, context).withName("S3Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNotOrCompressFilter = (input: NotOrCompressFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("NotOrCompressFilter");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = serializeAws_restXmlPrefixOrSuffix(input.Prefix, context).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Suffix !== undefined && input.Suffix !== null) {
    const node = serializeAws_restXmlPrefixOrSuffix(input.Suffix, context).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectIdentifier = (input: ObjectIdentifier, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectIdentifier");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("ObjectKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Token !== undefined && input.Token !== null) {
    const node = new __XmlNode("ObjectLockToken").addChildNode(new __XmlText(input.Token)).withName("Token");
    bodyNode.addChildNode(node);
  }
  if (input.VersionId !== undefined && input.VersionId !== null) {
    const node = new __XmlNode("ObjectVersionId").addChildNode(new __XmlText(input.VersionId)).withName("VersionId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectIdentifierList = (input: ObjectIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlObjectIdentifier(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlObjectLockConfiguration = (input: ObjectLockConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockConfiguration");
  if (input.ObjectLockEnabled !== undefined && input.ObjectLockEnabled !== null) {
    const node = new __XmlNode("ObjectLockEnabled")
      .addChildNode(new __XmlText(input.ObjectLockEnabled))
      .withName("ObjectLockEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Rule !== undefined && input.Rule !== null) {
    const node = serializeAws_restXmlObjectLockRule(input.Rule, context).withName("Rule");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockLegalHold = (input: ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockLegalHold");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("ObjectLockLegalHoldStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockRetention = (input: ObjectLockRetention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockRetention");
  if (input.Mode !== undefined && input.Mode !== null) {
    const node = new __XmlNode("ObjectLockRetentionMode").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.RetainUntilDate !== undefined && input.RetainUntilDate !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockRule = (input: ObjectLockRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockRule");
  if (input.DefaultRetention !== undefined && input.DefaultRetention !== null) {
    const node = serializeAws_restXmlDefaultRetention(input.DefaultRetention, context).withName("DefaultRetention");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectSizeRange = (input: ObjectSizeRange, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectSizeRange");
  if (input.Start !== undefined && input.Start !== null) {
    const node = new __XmlNode("Start").addChildNode(new __XmlText(String(input.Start))).withName("Start");
    bodyNode.addChildNode(node);
  }
  if (input.End !== undefined && input.End !== null) {
    const node = new __XmlNode("End").addChildNode(new __XmlText(String(input.End))).withName("End");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOSCPConfiguration = (input: OSCPConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OSCPConfiguration");
  if (input.Policies !== undefined && input.Policies !== null) {
    const nodes = serializeAws_restXmlOSCPPolicies(input.Policies, context);
    nodes.map((node: any) => {
      node = node.withName("Policy");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlOSCPPolicies = (input: OSCPPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlOSCPPolicy(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlOSCPPolicy = (input: OSCPPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OSCPPolicy");
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlOSCPPolicyFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierConfiguration !== undefined && input.GlacierConfiguration !== null) {
    const node = new __XmlNode("StringType")
      .addChildNode(new __XmlText(input.GlacierConfiguration))
      .withName("GlacierConfiguration");
    bodyNode.addChildNode(node);
  }
  if (input.Priority !== undefined && input.Priority !== null) {
    const node = new __XmlNode("Priority").addChildNode(new __XmlText(String(input.Priority))).withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("Comments").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOSCPPolicyAndRuleOperator = (
  input: OSCPPolicyAndRuleOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OSCPPolicyAndRuleOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.PrefixNotMatch !== undefined && input.PrefixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.PrefixNotMatch)).withName("PrefixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.Suffix !== undefined && input.Suffix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Suffix)).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  if (input.SuffixNotMatch !== undefined && input.SuffixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.SuffixNotMatch)).withName("SuffixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThan !== undefined && input.ObjectSizeLessThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThan)))
      .withName("ObjectSizeLessThan");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThanOrEqualTo !== undefined && input.ObjectSizeLessThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThanOrEqualTo)))
      .withName("ObjectSizeLessThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeEqualTo !== undefined && input.ObjectSizeEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeEqualTo)))
      .withName("ObjectSizeEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeBetween !== undefined && input.ObjectSizeBetween !== null) {
    const node = serializeAws_restXmlObjectSizeRange(input.ObjectSizeBetween, context).withName("ObjectSizeBetween");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThanOrEqualTo !== undefined && input.ObjectSizeGreaterThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThanOrEqualTo)))
      .withName("ObjectSizeGreaterThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThan !== undefined && input.ObjectSizeGreaterThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThan)))
      .withName("ObjectSizeGreaterThan");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata !== undefined && input.UserMetadata !== null) {
    const node = serializeAws_restXmlUserMetadataSingle(input.UserMetadata, context).withName("UserMetadata");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlOSCPPolicyFilter = (input: OSCPPolicyFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OSCPPolicyFilter");
  OSCPPolicyFilter.visit(input, {
    And: (value) => {
      const node = serializeAws_restXmlOSCPPolicyAndRuleOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    Or: (value) => {
      const node = serializeAws_restXmlOSCPPolicyOrRuleOperator(value, context).withName("Or");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    Prefix: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    PrefixNotMatch: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("PrefixNotMatch");
      bodyNode.addChildNode(node);
    },
    Suffix: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("Suffix");
      bodyNode.addChildNode(node);
    },
    SuffixNotMatch: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("SuffixNotMatch");
      bodyNode.addChildNode(node);
    },
    ObjectSizeLessThan: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeLessThan");
      bodyNode.addChildNode(node);
    },
    ObjectSizeLessThanOrEqualTo: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeLessThanOrEqualTo");
      bodyNode.addChildNode(node);
    },
    ObjectSizeEqualTo: (value) => {
      const node = new __XmlNode("ObjectSize").addChildNode(new __XmlText(String(value))).withName("ObjectSizeEqualTo");
      bodyNode.addChildNode(node);
    },
    ObjectSizeBetween: (value) => {
      const node = serializeAws_restXmlObjectSizeRange(value, context).withName("ObjectSizeBetween");
      bodyNode.addChildNode(node);
    },
    ObjectSizeGreaterThanOrEqualTo: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeGreaterThanOrEqualTo");
      bodyNode.addChildNode(node);
    },
    ObjectSizeGreaterThan: (value) => {
      const node = new __XmlNode("ObjectSize")
        .addChildNode(new __XmlText(String(value)))
        .withName("ObjectSizeGreaterThan");
      bodyNode.addChildNode(node);
    },
    UserMetadata: (value) => {
      const node = serializeAws_restXmlUserMetadataSingle(value, context).withName("UserMetadata");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

const serializeAws_restXmlOSCPPolicyOrRuleOperator = (
  input: OSCPPolicyOrRuleOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OSCPPolicyOrRuleOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.PrefixNotMatch !== undefined && input.PrefixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.PrefixNotMatch)).withName("PrefixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.Suffix !== undefined && input.Suffix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Suffix)).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  if (input.SuffixNotMatch !== undefined && input.SuffixNotMatch !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.SuffixNotMatch)).withName("SuffixNotMatch");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThan !== undefined && input.ObjectSizeLessThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThan)))
      .withName("ObjectSizeLessThan");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThanOrEqualTo !== undefined && input.ObjectSizeLessThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeLessThanOrEqualTo)))
      .withName("ObjectSizeLessThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeEqualTo !== undefined && input.ObjectSizeEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeEqualTo)))
      .withName("ObjectSizeEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeBetween !== undefined && input.ObjectSizeBetween !== null) {
    const node = serializeAws_restXmlObjectSizeRange(input.ObjectSizeBetween, context).withName("ObjectSizeBetween");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThanOrEqualTo !== undefined && input.ObjectSizeGreaterThanOrEqualTo !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThanOrEqualTo)))
      .withName("ObjectSizeGreaterThanOrEqualTo");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeGreaterThan !== undefined && input.ObjectSizeGreaterThan !== null) {
    const node = new __XmlNode("ObjectSize")
      .addChildNode(new __XmlText(String(input.ObjectSizeGreaterThan)))
      .withName("ObjectSizeGreaterThan");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata !== undefined && input.UserMetadata !== null) {
    const node = serializeAws_restXmlUserMetadataSingle(input.UserMetadata, context).withName("UserMetadata");
    bodyNode.addChildNode(node);
  }
  if (input.Tag !== undefined && input.Tag !== null) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And !== undefined && input.And !== null) {
    const node = serializeAws_restXmlTagMultiInOrMode(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputLocation");
  if (input.S3 !== undefined && input.S3 !== null) {
    const node = serializeAws_restXmlS3Location(input.S3, context).withName("S3");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputSerialization");
  if (input.CSV !== undefined && input.CSV !== null) {
    const node = serializeAws_restXmlCSVOutput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  if (input.JSON !== undefined && input.JSON !== null) {
    const node = serializeAws_restXmlJSONOutput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwner = (input: Owner, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Owner");
  if (input.DisplayName !== undefined && input.DisplayName !== null) {
    const node = new __XmlNode("DisplayName").addChildNode(new __XmlText(input.DisplayName)).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwnershipControls = (input: OwnershipControls, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OwnershipControls");
  if (input.Rules !== undefined && input.Rules !== null) {
    const nodes = serializeAws_restXmlOwnershipControlsRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlOwnershipControlsRule = (input: OwnershipControlsRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OwnershipControlsRule");
  if (input.ObjectOwnership !== undefined && input.ObjectOwnership !== null) {
    const node = new __XmlNode("ObjectOwnership")
      .addChildNode(new __XmlText(input.ObjectOwnership))
      .withName("ObjectOwnership");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwnershipControlsRules = (input: OwnershipControlsRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlOwnershipControlsRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlParquetInput = (input: ParquetInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ParquetInput");
  return bodyNode;
};

const serializeAws_restXmlPrefixOrSuffix = (input: PrefixOrSuffix, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PrefixOrSuffix");
  if (input.Value !== undefined && input.Value !== null) {
    const nodes = serializeAws_restXmlPrefixOrSuffixValue(input.Value, context);
    nodes.map((node: any) => {
      node = node.withName("Value");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlPrefixOrSuffixValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("StringType").addChildNode(new __XmlText(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlPublicAccessBlockConfiguration = (
  input: PublicAccessBlockConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PublicAccessBlockConfiguration");
  if (input.BlockPublicAcls !== undefined && input.BlockPublicAcls !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.BlockPublicAcls)))
      .withName("BlockPublicAcls");
    bodyNode.addChildNode(node);
  }
  if (input.IgnorePublicAcls !== undefined && input.IgnorePublicAcls !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.IgnorePublicAcls)))
      .withName("IgnorePublicAcls");
    bodyNode.addChildNode(node);
  }
  if (input.BlockPublicPolicy !== undefined && input.BlockPublicPolicy !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.BlockPublicPolicy)))
      .withName("BlockPublicPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.RestrictPublicBuckets !== undefined && input.RestrictPublicBuckets !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.RestrictPublicBuckets)))
      .withName("RestrictPublicBuckets");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQoSConfiguration = (input: QoSConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QoSConfiguration");
  if (input.ReadOps !== undefined && input.ReadOps !== null) {
    const node = new __XmlNode("BucketOps").addChildNode(new __XmlText(String(input.ReadOps))).withName("ReadOps");
    bodyNode.addChildNode(node);
  }
  if (input.WriteOps !== undefined && input.WriteOps !== null) {
    const node = new __XmlNode("BucketOps").addChildNode(new __XmlText(String(input.WriteOps))).withName("WriteOps");
    bodyNode.addChildNode(node);
  }
  if (input.ReadBandwidth !== undefined && input.ReadBandwidth !== null) {
    const node = new __XmlNode("BucketBandWidth")
      .addChildNode(new __XmlText(String(input.ReadBandwidth)))
      .withName("ReadBandwidth");
    bodyNode.addChildNode(node);
  }
  if (input.WriteBandwidth !== undefined && input.WriteBandwidth !== null) {
    const node = new __XmlNode("BucketBandWidth")
      .addChildNode(new __XmlText(String(input.WriteBandwidth)))
      .withName("WriteBandwidth");
    bodyNode.addChildNode(node);
  }
  if (input.TotalOps !== undefined && input.TotalOps !== null) {
    const node = new __XmlNode("BucketOps").addChildNode(new __XmlText(String(input.TotalOps))).withName("TotalOps");
    bodyNode.addChildNode(node);
  }
  if (input.DeleteOps !== undefined && input.DeleteOps !== null) {
    const node = new __XmlNode("BucketOps").addChildNode(new __XmlText(String(input.DeleteOps))).withName("DeleteOps");
    bodyNode.addChildNode(node);
  }
  if (input.ListOps !== undefined && input.ListOps !== null) {
    const node = new __XmlNode("BucketOps").addChildNode(new __XmlText(String(input.ListOps))).withName("ListOps");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQueueConfiguration = (input: QueueConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueueConfiguration");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("NotificationId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.QueueArn !== undefined && input.QueueArn !== null) {
    const node = new __XmlNode("QueueArn").addChildNode(new __XmlText(input.QueueArn)).withName("Queue");
    bodyNode.addChildNode(node);
  }
  if (input.Events !== undefined && input.Events !== null) {
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQueueConfigurationList = (input: QueueConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlQueueConfiguration(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlQuota = (input: Quota, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Quota");
  if (input.StorageQuota !== undefined && input.StorageQuota !== null) {
    const node = new __XmlNode("StorageQuota").addChildNode(new __XmlText(input.StorageQuota)).withName("StorageQuota");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectQuota !== undefined && input.ObjectQuota !== null) {
    const node = new __XmlNode("ObjectQuota").addChildNode(new __XmlText(input.ObjectQuota)).withName("ObjectQuota");
    bodyNode.addChildNode(node);
  }
  if (input.OverQuotaDelete !== undefined && input.OverQuotaDelete !== null) {
    const node = new __XmlNode("StringType")
      .addChildNode(new __XmlText(input.OverQuotaDelete))
      .withName("OverQuotaDelete");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRedirect = (input: Redirect, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Redirect");
  if (input.HostName !== undefined && input.HostName !== null) {
    const node = new __XmlNode("HostName").addChildNode(new __XmlText(input.HostName)).withName("HostName");
    bodyNode.addChildNode(node);
  }
  if (input.HttpRedirectCode !== undefined && input.HttpRedirectCode !== null) {
    const node = new __XmlNode("HttpRedirectCode")
      .addChildNode(new __XmlText(input.HttpRedirectCode))
      .withName("HttpRedirectCode");
    bodyNode.addChildNode(node);
  }
  if (input.Protocol !== undefined && input.Protocol !== null) {
    const node = new __XmlNode("Protocol").addChildNode(new __XmlText(input.Protocol)).withName("Protocol");
    bodyNode.addChildNode(node);
  }
  if (input.ReplaceKeyPrefixWith !== undefined && input.ReplaceKeyPrefixWith !== null) {
    const node = new __XmlNode("ReplaceKeyPrefixWith")
      .addChildNode(new __XmlText(input.ReplaceKeyPrefixWith))
      .withName("ReplaceKeyPrefixWith");
    bodyNode.addChildNode(node);
  }
  if (input.ReplaceKeyWith !== undefined && input.ReplaceKeyWith !== null) {
    const node = new __XmlNode("ReplaceKeyWith")
      .addChildNode(new __XmlText(input.ReplaceKeyWith))
      .withName("ReplaceKeyWith");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRedirectAllRequestsTo = (input: RedirectAllRequestsTo, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RedirectAllRequestsTo");
  if (input.HostName !== undefined && input.HostName !== null) {
    const node = new __XmlNode("HostName").addChildNode(new __XmlText(input.HostName)).withName("HostName");
    bodyNode.addChildNode(node);
  }
  if (input.Protocol !== undefined && input.Protocol !== null) {
    const node = new __XmlNode("Protocol").addChildNode(new __XmlText(input.Protocol)).withName("Protocol");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRefererConfiguration = (input: RefererConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RefererConfiguration");
  if (input.AllowEmptyReferer !== undefined && input.AllowEmptyReferer !== null) {
    const node = new __XmlNode("AllowEmptyReferer")
      .addChildNode(new __XmlText(String(input.AllowEmptyReferer)))
      .withName("AllowEmptyReferer");
    bodyNode.addChildNode(node);
  }
  if (input.RefererList !== undefined && input.RefererList !== null) {
    const node = serializeAws_restXmlRefererList(input.RefererList, context).withName("RefererList");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRefererList = (input: RefererList, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RefererList");
  if (input.BlackList !== undefined && input.BlackList !== null) {
    const nodes = serializeAws_restXmlBlackList(input.BlackList, context);
    const containerNode = new __XmlNode("BlackList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.WhiteList !== undefined && input.WhiteList !== null) {
    const nodes = serializeAws_restXmlWhiteList(input.WhiteList, context);
    const containerNode = new __XmlNode("WhiteList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicaModifications = (input: ReplicaModifications, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicaModifications");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("ReplicaModificationsStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationConfiguration = (
  input: ReplicationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ReplicationConfiguration");
  if (input.Role !== undefined && input.Role !== null) {
    const node = new __XmlNode("Role").addChildNode(new __XmlText(input.Role)).withName("Role");
    bodyNode.addChildNode(node);
  }
  if (input.Rules !== undefined && input.Rules !== null) {
    const nodes = serializeAws_restXmlReplicationRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRule = (input: ReplicationRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationRule");
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Priority !== undefined && input.Priority !== null) {
    const node = new __XmlNode("Priority").addChildNode(new __XmlText(String(input.Priority))).withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlReplicationRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("ReplicationRuleStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.SourceSelectionCriteria !== undefined && input.SourceSelectionCriteria !== null) {
    const node = serializeAws_restXmlSourceSelectionCriteria(input.SourceSelectionCriteria, context).withName(
      "SourceSelectionCriteria"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ExistingObjectReplication !== undefined && input.ExistingObjectReplication !== null) {
    const node = serializeAws_restXmlExistingObjectReplication(input.ExistingObjectReplication, context).withName(
      "ExistingObjectReplication"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Destination !== undefined && input.Destination !== null) {
    const node = serializeAws_restXmlDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  if (input.DeleteMarkerReplication !== undefined && input.DeleteMarkerReplication !== null) {
    const node = serializeAws_restXmlDeleteMarkerReplication(input.DeleteMarkerReplication, context).withName(
      "DeleteMarkerReplication"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRuleAndOperator = (
  input: ReplicationRuleAndOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ReplicationRuleAndOperator");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRuleFilter = (input: ReplicationRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationRuleFilter");
  ReplicationRuleFilter.visit(input, {
    Prefix: (value) => {
      const node = new __XmlNode("Prefix").addChildNode(new __XmlText(value)).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = serializeAws_restXmlReplicationRuleAndOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

const serializeAws_restXmlReplicationRules = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlReplicationRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlReplicationTime = (input: ReplicationTime, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTime");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("ReplicationTimeStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Time !== undefined && input.Time !== null) {
    const node = serializeAws_restXmlReplicationTimeValue(input.Time, context).withName("Time");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationTimeValue = (input: ReplicationTimeValue, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTimeValue");
  if (input.Minutes !== undefined && input.Minutes !== null) {
    const node = new __XmlNode("Minutes").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRequestPaymentConfiguration = (
  input: RequestPaymentConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RequestPaymentConfiguration");
  if (input.Payer !== undefined && input.Payer !== null) {
    const node = new __XmlNode("Payer").addChildNode(new __XmlText(input.Payer)).withName("Payer");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRequestProgress = (input: RequestProgress, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RequestProgress");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("EnableRequestProgress")
      .addChildNode(new __XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRestore = (input: Restore, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Restore");
  if (input.RestoreRequest !== undefined && input.RestoreRequest !== null) {
    const node = serializeAws_restXmlBatchRestoreRequest(input.RestoreRequest, context).withName("RestoreRequest");
    bodyNode.addChildNode(node);
  }
  if (input.Objects !== undefined && input.Objects !== null) {
    const nodes = serializeAws_restXmlObjectIdentifierList(input.Objects, context);
    nodes.map((node: any) => {
      node = node.withName("Object");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlRestoreExpiration = (input: RestoreExpiration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RestoreExpiration");
  if (input.DeleteRestoreObject !== undefined && input.DeleteRestoreObject !== null) {
    const node = new __XmlNode("booleanType")
      .addChildNode(new __XmlText(String(input.DeleteRestoreObject)))
      .withName("DeleteRestoreObject");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRestoreEXRequest = (input: RestoreEXRequest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RestoreEXRequest");
  if (input.Tier !== undefined && input.Tier !== null) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.Tier)).withName("Tier");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRestoreRequest = (input: RestoreRequest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RestoreRequest");
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Hours !== undefined && input.Hours !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Hours))).withName("Hours");
    bodyNode.addChildNode(node);
  }
  if (input.Minutes !== undefined && input.Minutes !== null) {
    const node = new __XmlNode("integerType").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierJobParameters !== undefined && input.GlacierJobParameters !== null) {
    const node = serializeAws_restXmlGlacierJobParameters(input.GlacierJobParameters, context).withName(
      "GlacierJobParameters"
    );
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.Type !== undefined && input.Type !== null) {
    const node = new __XmlNode("RestoreRequestType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.Tier !== undefined && input.Tier !== null) {
    const node = new __XmlNode("Tier").addChildNode(new __XmlText(input.Tier)).withName("Tier");
    bodyNode.addChildNode(node);
  }
  if (input.Description !== undefined && input.Description !== null) {
    const node = new __XmlNode("Description").addChildNode(new __XmlText(input.Description)).withName("Description");
    bodyNode.addChildNode(node);
  }
  if (input.SelectParameters !== undefined && input.SelectParameters !== null) {
    const node = serializeAws_restXmlSelectParameters(input.SelectParameters, context).withName("SelectParameters");
    bodyNode.addChildNode(node);
  }
  if (input.OutputLocation !== undefined && input.OutputLocation !== null) {
    const node = serializeAws_restXmlOutputLocation(input.OutputLocation, context).withName("OutputLocation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRoutingRule = (input: RoutingRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RoutingRule");
  if (input.Condition !== undefined && input.Condition !== null) {
    const node = serializeAws_restXmlCondition(input.Condition, context).withName("Condition");
    bodyNode.addChildNode(node);
  }
  if (input.Redirect !== undefined && input.Redirect !== null) {
    const node = serializeAws_restXmlRedirect(input.Redirect, context).withName("Redirect");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRoutingRules = (input: RoutingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlRoutingRule(entry, context);
      return node.withName("RoutingRule");
    });
};

const serializeAws_restXmlS3KeyFilter = (input: S3KeyFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3KeyFilter");
  if (input.FilterRules !== undefined && input.FilterRules !== null) {
    const nodes = serializeAws_restXmlFilterRuleList(input.FilterRules, context);
    nodes.map((node: any) => {
      node = node.withName("FilterRule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlS3Location = (input: S3Location, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Location");
  if (input.BucketName !== undefined && input.BucketName !== null) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.BucketName)).withName("BucketName");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("LocationPrefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption !== undefined && input.Encryption !== null) {
    const node = serializeAws_restXmlEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  if (input.CannedACL !== undefined && input.CannedACL !== null) {
    const node = new __XmlNode("ObjectCannedACL").addChildNode(new __XmlText(input.CannedACL)).withName("CannedACL");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlList !== undefined && input.AccessControlList !== null) {
    const nodes = serializeAws_restXmlGrants(input.AccessControlList, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Tagging !== undefined && input.Tagging !== null) {
    const node = serializeAws_restXmlTagging(input.Tagging, context).withName("Tagging");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata !== undefined && input.UserMetadata !== null) {
    const nodes = serializeAws_restXmlUserMetadata(input.UserMetadata, context);
    const containerNode = new __XmlNode("UserMetadata");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlScanRange = (input: ScanRange, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ScanRange");
  if (input.Start !== undefined && input.Start !== null) {
    const node = new __XmlNode("Start").addChildNode(new __XmlText(String(input.Start))).withName("Start");
    bodyNode.addChildNode(node);
  }
  if (input.End !== undefined && input.End !== null) {
    const node = new __XmlNode("End").addChildNode(new __XmlText(String(input.End))).withName("End");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SelectParameters");
  if (input.InputSerialization !== undefined && input.InputSerialization !== null) {
    const node = serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName(
      "InputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ExpressionType !== undefined && input.ExpressionType !== null) {
    const node = new __XmlNode("ExpressionType")
      .addChildNode(new __XmlText(input.ExpressionType))
      .withName("ExpressionType");
    bodyNode.addChildNode(node);
  }
  if (input.Expression !== undefined && input.Expression !== null) {
    const node = new __XmlNode("Expression").addChildNode(new __XmlText(input.Expression)).withName("Expression");
    bodyNode.addChildNode(node);
  }
  if (input.OutputSerialization !== undefined && input.OutputSerialization !== null) {
    const node = serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName(
      "OutputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionByDefault = (
  input: ServerSideEncryptionByDefault,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionByDefault");
  if (input.SSEAlgorithm !== undefined && input.SSEAlgorithm !== null) {
    const node = new __XmlNode("ServerSideEncryption")
      .addChildNode(new __XmlText(input.SSEAlgorithm))
      .withName("SSEAlgorithm");
    bodyNode.addChildNode(node);
  }
  if (input.KMSMasterKeyID !== undefined && input.KMSMasterKeyID !== null) {
    const node = new __XmlNode("SSEKMSKeyId")
      .addChildNode(new __XmlText(input.KMSMasterKeyID))
      .withName("KMSMasterKeyID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionConfiguration");
  if (input.Rules !== undefined && input.Rules !== null) {
    const nodes = serializeAws_restXmlServerSideEncryptionRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Algothrim !== undefined && input.Algothrim !== null) {
    const node = new __XmlNode("Algothrim").addChildNode(new __XmlText(input.Algothrim)).withName("Algothrim");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.ServerSideEncryptionAlgorithm !== undefined && input.ServerSideEncryptionAlgorithm !== null) {
    const node = new __XmlNode("Algothrim")
      .addChildNode(new __XmlText(input.ServerSideEncryptionAlgorithm))
      .withName("ServerSideEncryptionAlgorithm");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionRule = (
  input: ServerSideEncryptionRule,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionRule");
  if (input.ApplyServerSideEncryptionByDefault !== undefined && input.ApplyServerSideEncryptionByDefault !== null) {
    const node = serializeAws_restXmlServerSideEncryptionByDefault(
      input.ApplyServerSideEncryptionByDefault,
      context
    ).withName("ApplyServerSideEncryptionByDefault");
    bodyNode.addChildNode(node);
  }
  if (input.BucketKeyEnabled !== undefined && input.BucketKeyEnabled !== null) {
    const node = new __XmlNode("BucketKeyEnabled")
      .addChildNode(new __XmlText(String(input.BucketKeyEnabled)))
      .withName("BucketKeyEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionRules = (
  input: ServerSideEncryptionRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlServerSideEncryptionRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlSnapshot = (input: Snapshot, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Snapshot");
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Type !== undefined && input.Type !== null) {
    const node = new __XmlNode("SnapshotType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("SnapshotName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Description !== undefined && input.Description !== null) {
    const node = new __XmlNode("Description").addChildNode(new __XmlText(input.Description)).withName("Description");
    bodyNode.addChildNode(node);
  }
  if (input.CreateDate !== undefined && input.CreateDate !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.CreateDate.toISOString().split(".")[0] + "Z"))
      .withName("CreateDate");
    bodyNode.addChildNode(node);
  }
  if (input.CreateTime !== undefined && input.CreateTime !== null) {
    const node = new __XmlNode("LastModified")
      .addChildNode(new __XmlText(input.CreateTime.toISOString().split(".")[0] + "Z"))
      .withName("CreateTime");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSnapshotDelete = (input: SnapshotDelete, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SnapshotDelete");
  if (input.Snapshots !== undefined && input.Snapshots !== null) {
    const nodes = serializeAws_restXmlSnapshotIdentifierList(input.Snapshots, context);
    nodes.map((node: any) => {
      node = node.withName("Snapshot");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlSnapshotDescription = (input: SnapshotDescription, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SnapshotDescription");
  if (input.Description !== undefined && input.Description !== null) {
    const node = new __XmlNode("Description").addChildNode(new __XmlText(input.Description)).withName("Description");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSnapshotIdentifier = (input: SnapshotIdentifier, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SnapshotIdentifier");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("SnapshotName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSnapshotIdentifierList = (input: SnapshotIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlSnapshotIdentifier(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlSnapshotPolicy = (input: SnapshotPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SnapshotPolicy");
  if (input.Type !== undefined && input.Type !== null) {
    const node = new __XmlNode("SnapshotType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.SnapshotPrefix !== undefined && input.SnapshotPrefix !== null) {
    const node = new __XmlNode("SnapshotName")
      .addChildNode(new __XmlText(input.SnapshotPrefix))
      .withName("SnapshotPrefix");
    bodyNode.addChildNode(node);
  }
  if (input.CreatePeriod !== undefined && input.CreatePeriod !== null) {
    const node = serializeAws_restXmlSnapshotPolicyPeriod(input.CreatePeriod, context).withName("CreatePeriod");
    bodyNode.addChildNode(node);
  }
  if (input.SnapshotReservedNum !== undefined && input.SnapshotReservedNum !== null) {
    const node = new __XmlNode("ObjectNumber")
      .addChildNode(new __XmlText(String(input.SnapshotReservedNum)))
      .withName("SnapshotReservedNum");
    bodyNode.addChildNode(node);
  }
  if (input.EnableSpacePolicy !== undefined && input.EnableSpacePolicy !== null) {
    const node = new __XmlNode("IsEnabled")
      .addChildNode(new __XmlText(String(input.EnableSpacePolicy)))
      .withName("EnableSpacePolicy");
    bodyNode.addChildNode(node);
  }
  if (input.Description !== undefined && input.Description !== null) {
    const node = new __XmlNode("Description").addChildNode(new __XmlText(input.Description)).withName("Description");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSnapshotPolicyPeriod = (input: SnapshotPolicyPeriod, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SnapshotPolicyPeriod");
  if (input.Day !== undefined && input.Day !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Day))).withName("Day");
    bodyNode.addChildNode(node);
  }
  if (input.Hour !== undefined && input.Hour !== null) {
    const node = new __XmlNode("Hours").addChildNode(new __XmlText(String(input.Hour))).withName("Hour");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSourceSelectionCriteria = (input: SourceSelectionCriteria, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SourceSelectionCriteria");
  if (input.SseKmsEncryptedObjects !== undefined && input.SseKmsEncryptedObjects !== null) {
    const node = serializeAws_restXmlSseKmsEncryptedObjects(input.SseKmsEncryptedObjects, context).withName(
      "SseKmsEncryptedObjects"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ReplicaModifications !== undefined && input.ReplicaModifications !== null) {
    const node = serializeAws_restXmlReplicaModifications(input.ReplicaModifications, context).withName(
      "ReplicaModifications"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId !== undefined && input.KeyId !== null) {
    const node = new __XmlNode("SSEKMSKeyId").addChildNode(new __XmlText(input.KeyId)).withName("KeyId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSseKmsEncryptedObjects = (input: SseKmsEncryptedObjects, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SseKmsEncryptedObjects");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("SseKmsEncryptedObjectsStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSES3 = (input: SSES3, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-S3");
  return bodyNode;
};

const serializeAws_restXmlStatisticConfiguration = (input: StatisticConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StatisticConfiguration");
  if (input.DomainNameList !== undefined && input.DomainNameList !== null) {
    const nodes = serializeAws_restXmlDomainNameList(input.DomainNameList, context);
    nodes.map((node: any) => {
      node = node.withName("DomainNameList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.TransferBucketName !== undefined && input.TransferBucketName !== null) {
    const node = serializeAws_restXmlTransferOrRestoreBucketName(input.TransferBucketName, context).withName(
      "TransferBucketName"
    );
    bodyNode.addChildNode(node);
  }
  if (input.RestoreEXBucketName !== undefined && input.RestoreEXBucketName !== null) {
    const node = serializeAws_restXmlTransferOrRestoreBucketName(input.RestoreEXBucketName, context).withName(
      "RestoreEXBucketName"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("Status").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageClassAnalysis = (input: StorageClassAnalysis, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageClassAnalysis");
  if (input.DataExport !== undefined && input.DataExport !== null) {
    const node = serializeAws_restXmlStorageClassAnalysisDataExport(input.DataExport, context).withName("DataExport");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageClassAnalysisDataExport = (
  input: StorageClassAnalysisDataExport,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StorageClassAnalysisDataExport");
  if (input.OutputSchemaVersion !== undefined && input.OutputSchemaVersion !== null) {
    const node = new __XmlNode("StorageClassAnalysisSchemaVersion")
      .addChildNode(new __XmlText(input.OutputSchemaVersion))
      .withName("OutputSchemaVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Destination !== undefined && input.Destination !== null) {
    const node = serializeAws_restXmlAnalyticsExportDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTag = (input: Tag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tag");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("ObjectKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("Value").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet !== undefined && input.TagSet !== null) {
    const nodes = serializeAws_restXmlTagSet(input.TagSet, context);
    const containerNode = new __XmlNode("TagSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlTagMultiInOrMode = (input: TagMultiInOrMode, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TagMultiInOrMode");
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlTagSet = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlTag(entry, context);
      return node.withName("Tag");
    });
};

const serializeAws_restXmlTargetGrant = (input: TargetGrant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TargetGrant");
  if (input.Grantee !== undefined && input.Grantee !== null) {
    const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
    bodyNode.addChildNode(node);
  }
  if (input.Permission !== undefined && input.Permission !== null) {
    const node = new __XmlNode("BucketLogsPermission")
      .addChildNode(new __XmlText(input.Permission))
      .withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTargetGrants = (input: TargetGrant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlTargetGrant(entry, context);
      return node.withName("Grant");
    });
};

const serializeAws_restXmlTiering = (input: Tiering, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tiering");
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("IntelligentTieringDays")
      .addChildNode(new __XmlText(String(input.Days)))
      .withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.AccessTier !== undefined && input.AccessTier !== null) {
    const node = new __XmlNode("IntelligentTieringAccessTier")
      .addChildNode(new __XmlText(input.AccessTier))
      .withName("AccessTier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTieringList = (input: Tiering[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlTiering(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlTopicConfiguration = (input: TopicConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TopicConfiguration");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("NotificationId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.TopicArn !== undefined && input.TopicArn !== null) {
    const node = new __XmlNode("TopicArn").addChildNode(new __XmlText(input.TopicArn)).withName("Topic");
    bodyNode.addChildNode(node);
  }
  if (input.Events !== undefined && input.Events !== null) {
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTopicConfigurationList = (input: TopicConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlTopicConfiguration(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlTransferOrRestoreBucketName = (
  input: TransferOrRestoreBucketName,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("TransferOrRestoreBucketName");
  if (input.StandardBucketName !== undefined && input.StandardBucketName !== null) {
    const node = new __XmlNode("BucketName")
      .addChildNode(new __XmlText(input.StandardBucketName))
      .withName("StandardBucketName");
    bodyNode.addChildNode(node);
  }
  if (input.StandardIABucketName !== undefined && input.StandardIABucketName !== null) {
    const node = new __XmlNode("BucketName")
      .addChildNode(new __XmlText(input.StandardIABucketName))
      .withName("StandardIABucketName");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierBucketName !== undefined && input.GlacierBucketName !== null) {
    const node = new __XmlNode("BucketName")
      .addChildNode(new __XmlText(input.GlacierBucketName))
      .withName("GlacierBucketName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTransition = (input: Transition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Transition");
  if (input.Date !== undefined && input.Date !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
      .withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Minutes !== undefined && input.Minutes !== null) {
    const node = new __XmlNode("Minutes").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  if (input.Hours !== undefined && input.Hours !== null) {
    const node = new __XmlNode("Hours").addChildNode(new __XmlText(String(input.Hours))).withName("Hours");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("TransitionStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierConfiguration !== undefined && input.GlacierConfiguration !== null) {
    const node = new __XmlNode("StringType")
      .addChildNode(new __XmlText(input.GlacierConfiguration))
      .withName("GlacierConfiguration");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlTransition(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlTrash = (input: Trash, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Trash");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("BucketTrashStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Mode !== undefined && input.Mode !== null) {
    const node = serializeAws_restXmlMode(input.Mode, context).withName("Mode");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlUserMetadata = (input: MetadataEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlMetadataEntry(entry, context);
      return node.withName("MetadataEntry");
    });
};

const serializeAws_restXmlUserMetadataSingle = (input: UserMetadataSingle, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("UserMetadataSingle");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("MetadataKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("MetadataValue").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlVersioningConfiguration = (input: VersioningConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VersioningConfiguration");
  if (input.MFADelete !== undefined && input.MFADelete !== null) {
    const node = new __XmlNode("MFADelete").addChildNode(new __XmlText(input.MFADelete)).withName("MfaDelete");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("BucketVersioningStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlWebsiteConfiguration = (input: WebsiteConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WebsiteConfiguration");
  if (input.ErrorDocument !== undefined && input.ErrorDocument !== null) {
    const node = serializeAws_restXmlErrorDocument(input.ErrorDocument, context).withName("ErrorDocument");
    bodyNode.addChildNode(node);
  }
  if (input.IndexDocument !== undefined && input.IndexDocument !== null) {
    const node = serializeAws_restXmlIndexDocument(input.IndexDocument, context).withName("IndexDocument");
    bodyNode.addChildNode(node);
  }
  if (input.RedirectAllRequestsTo !== undefined && input.RedirectAllRequestsTo !== null) {
    const node = serializeAws_restXmlRedirectAllRequestsTo(input.RedirectAllRequestsTo, context).withName(
      "RedirectAllRequestsTo"
    );
    bodyNode.addChildNode(node);
  }
  if (input.RoutingRules !== undefined && input.RoutingRules !== null) {
    const nodes = serializeAws_restXmlRoutingRules(input.RoutingRules, context);
    const containerNode = new __XmlNode("RoutingRules");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlWhiteList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("Referer").addChildNode(new __XmlText(entry));
      return node.withName("Referer");
    });
};

const serializeAws_restXmlWORM = (input: WORM, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WORM");
  if (input.GraceUntilDate !== undefined && input.GraceUntilDate !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.GraceUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("GraceUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.RetainUntilDate !== undefined && input.RetainUntilDate !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlWORMConfiguration = (input: WORMConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WORMConfiguration");
  if (input.WORMEnabled !== undefined && input.WORMEnabled !== null) {
    const node = new __XmlNode("WORMEnabled").addChildNode(new __XmlText(input.WORMEnabled)).withName("WORMEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Rule !== undefined && input.Rule !== null) {
    const node = serializeAws_restXmlWORMRule(input.Rule, context).withName("Rule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlWORMDefaultRetention = (input: WORMDefaultRetention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WORMDefaultRetention");
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Years !== undefined && input.Years !== null) {
    const node = new __XmlNode("Years").addChildNode(new __XmlText(String(input.Years))).withName("Years");
    bodyNode.addChildNode(node);
  }
  if (input.Months !== undefined && input.Months !== null) {
    const node = new __XmlNode("Months").addChildNode(new __XmlText(String(input.Months))).withName("Months");
    bodyNode.addChildNode(node);
  }
  if (input.Hours !== undefined && input.Hours !== null) {
    const node = new __XmlNode("Hours").addChildNode(new __XmlText(String(input.Hours))).withName("Hours");
    bodyNode.addChildNode(node);
  }
  if (input.Minutes !== undefined && input.Minutes !== null) {
    const node = new __XmlNode("Minutes").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlWORMRetainPeriod = (input: WORMRetainPeriod, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WORMRetainPeriod");
  if (input.RetainUntilDate !== undefined && input.RetainUntilDate !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlWORMRule = (input: WORMRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WORMRule");
  if (input.DefaultRetention !== undefined && input.DefaultRetention !== null) {
    const node = serializeAws_restXmlWORMDefaultRetention(input.DefaultRetention, context).withName("DefaultRetention");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultGracePeriod !== undefined && input.DefaultGracePeriod !== null) {
    const node = serializeAws_restXmlWORMDefaultRetention(input.DefaultGracePeriod, context).withName(
      "DefaultGracePeriod"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const deserializeAws_restXmlAbortIncompleteMultipartUpload = (
  output: any,
  context: __SerdeContext
): AbortIncompleteMultipartUpload => {
  let contents: any = {
    DaysAfterInitiation: undefined,
    HoursAfterInitiation: undefined,
    MinutesAfterInitiation: undefined,
  };
  if (output["DaysAfterInitiation"] !== undefined) {
    contents.DaysAfterInitiation = parseInt(output["DaysAfterInitiation"]);
  }
  if (output["HoursAfterInitiation"] !== undefined) {
    contents.HoursAfterInitiation = parseInt(output["HoursAfterInitiation"]);
  }
  if (output["MinutesAfterInitiation"] !== undefined) {
    contents.MinutesAfterInitiation = parseInt(output["MinutesAfterInitiation"]);
  }
  return contents;
};

const deserializeAws_restXmlAccessControlTranslation = (
  output: any,
  context: __SerdeContext
): AccessControlTranslation => {
  let contents: any = {
    Owner: undefined,
  };
  if (output["Owner"] !== undefined) {
    contents.Owner = output["Owner"];
  }
  return contents;
};

const deserializeAws_restXmlAdrCacheConfiguration = (output: any, context: __SerdeContext): AdrCacheConfiguration => {
  let contents: any = {
    Days: undefined,
    Hours: undefined,
    Minutes: undefined,
    StorageClass: undefined,
    RangeCacheEnabled: undefined,
  };
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Hours"] !== undefined) {
    contents.Hours = parseInt(output["Hours"]);
  }
  if (output["Minutes"] !== undefined) {
    contents.Minutes = parseInt(output["Minutes"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["RangeCacheEnabled"] !== undefined) {
    contents.RangeCacheEnabled = output["RangeCacheEnabled"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlAdrRule = (output: any, context: __SerdeContext): AdrRule => {
  let contents: any = {
    Platform: undefined,
    Mode: undefined,
    CacheConfiguration: undefined,
  };
  if (output["Platform"] !== undefined) {
    contents.Platform = output["Platform"];
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["CacheConfiguration"] !== undefined) {
    contents.CacheConfiguration = deserializeAws_restXmlAdrCacheConfiguration(output["CacheConfiguration"], context);
  }
  return contents;
};

const deserializeAws_restXmlAdrRules = (output: any, context: __SerdeContext): AdrRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlAdrRule(entry, context);
    });
};

const deserializeAws_restXmlAllowedHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlAllowedMethods = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlAllowedOrigins = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlAnalyticsAndOperator = (output: any, context: __SerdeContext): AnalyticsAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsConfiguration = (output: any, context: __SerdeContext): AnalyticsConfiguration => {
  let contents: any = {
    Id: undefined,
    Filter: undefined,
    StorageClassAnalysis: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlAnalyticsFilter(output["Filter"], context);
  }
  if (output["StorageClassAnalysis"] !== undefined) {
    contents.StorageClassAnalysis = deserializeAws_restXmlStorageClassAnalysis(output["StorageClassAnalysis"], context);
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsConfigurationList = (
  output: any,
  context: __SerdeContext
): AnalyticsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlAnalyticsConfiguration(entry, context);
    });
};

const deserializeAws_restXmlAnalyticsExportDestination = (
  output: any,
  context: __SerdeContext
): AnalyticsExportDestination => {
  let contents: any = {
    S3BucketDestination: undefined,
  };
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = deserializeAws_restXmlAnalyticsS3BucketDestination(
      output["S3BucketDestination"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsFilter = (output: any, context: __SerdeContext): AnalyticsFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: output["Prefix"],
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlAnalyticsAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlAnalyticsS3BucketDestination = (
  output: any,
  context: __SerdeContext
): AnalyticsS3BucketDestination => {
  let contents: any = {
    Format: undefined,
    BucketAccountId: undefined,
    Bucket: undefined,
    Prefix: undefined,
  };
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  if (output["BucketAccountId"] !== undefined) {
    contents.BucketAccountId = output["BucketAccountId"];
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};

const deserializeAws_restXmlArchiveDirectReadConfiguration = (
  output: any,
  context: __SerdeContext
): ArchiveDirectReadConfiguration => {
  let contents: any = {
    Status: undefined,
    Enabled: undefined,
    Mode: undefined,
    CacheConfiguration: undefined,
    Rules: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["CacheConfiguration"] !== undefined) {
    contents.CacheConfiguration = deserializeAws_restXmlAdrCacheConfiguration(output["CacheConfiguration"], context);
  }
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (output["Rules"] !== undefined && output["Rules"]["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlAdrRules(__getArrayIfSingleItem(output["Rules"]["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlBlackList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlBtsConfiguration = (output: any, context: __SerdeContext): BtsConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlBucket = (output: any, context: __SerdeContext): Bucket => {
  let contents: any = {
    ID: undefined,
    Name: undefined,
    CreationDate: undefined,
    Quota: undefined,
    ObjectNumber: undefined,
    Size: undefined,
    CompressSize: undefined,
    CompressRatio: undefined,
    PhysicalSize: undefined,
    TrashObjectNumber: undefined,
    TrashSize: undefined,
    StoragePoolId: undefined,
    VersionId: undefined,
    EndPoint: undefined,
    VersioningConfiguration: undefined,
    ObjectLockConfiguration: undefined,
    LifecycleConfiguration: undefined,
    OSCPConfiguration: undefined,
    MetaSearchConfiguration: undefined,
    CORSConfiguration: undefined,
    RefererConfiguration: undefined,
    ServerSideEncryptionConfiguration: undefined,
    LoggingConfiguration: undefined,
    TaggingConfiguration: undefined,
    PolicyConfiguration: undefined,
    QoSConfiguration: undefined,
    ArchiveDirectReadConfiguration: undefined,
    BtsConfiguration: undefined,
    StatisticConfiguration: undefined,
    BucketRedundancyConfiguration: undefined,
    DefaultStorageClass: undefined,
    RepPairConfiguration: undefined,
    DedupConfiguration: undefined,
    TrashConfiguration: undefined,
    SnapConfiguration: undefined,
    GlacierConfiguration: undefined,
    StorageClassStatistics: undefined,
    ArchivedObjectNumber: undefined,
    ArchivedObjectSize: undefined,
    RestoredObjectNumber: undefined,
    RestoredObjectSize: undefined,
    CompressionConfiguration: undefined,
    HistoryCompressionConfiguration: undefined,
    IsGlobalBucket: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = parseInt(output["ID"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(output["CreationDate"]);
  }
  if (output["Quota"] !== undefined) {
    contents.Quota = deserializeAws_restXmlQuota(output["Quota"], context);
  }
  if (output["ObjectNumber"] !== undefined) {
    contents.ObjectNumber = parseInt(output["ObjectNumber"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["CompressSize"] !== undefined) {
    contents.CompressSize = parseInt(output["CompressSize"]);
  }
  if (output["CompressRatio"] !== undefined) {
    contents.CompressRatio = output["CompressRatio"];
  }
  if (output["PhysicalSize"] !== undefined) {
    contents.PhysicalSize = parseInt(output["PhysicalSize"]);
  }
  if (output["TrashObjectNumber"] !== undefined) {
    contents.TrashObjectNumber = parseInt(output["TrashObjectNumber"]);
  }
  if (output["TrashSize"] !== undefined) {
    contents.TrashSize = parseInt(output["TrashSize"]);
  }
  if (output["StoragePoolId"] !== undefined) {
    contents.StoragePoolId = output["StoragePoolId"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["EndPoint"] !== undefined) {
    contents.EndPoint = output["EndPoint"];
  }
  if (output["VersioningConfiguration"] !== undefined) {
    contents.VersioningConfiguration = deserializeAws_restXmlVersioningConfiguration(
      output["VersioningConfiguration"],
      context
    );
  }
  if (output["ObjectLockConfiguration"] !== undefined) {
    contents.ObjectLockConfiguration = deserializeAws_restXmlObjectLockConfiguration(
      output["ObjectLockConfiguration"],
      context
    );
  }
  if (output["LifecycleConfiguration"] !== undefined) {
    contents.LifecycleConfiguration = deserializeAws_restXmlBucketLifecycleConfiguration(
      output["LifecycleConfiguration"],
      context
    );
  }
  if (output["OSCPConfiguration"] !== undefined) {
    contents.OSCPConfiguration = deserializeAws_restXmlBucketOSCPConfiguration(output["OSCPConfiguration"], context);
  }
  if (output["MetaSearchConfiguration"] !== undefined) {
    contents.MetaSearchConfiguration = deserializeAws_restXmlMetaSearchConfiguration(
      output["MetaSearchConfiguration"],
      context
    );
  }
  if (output["CORSConfiguration"] !== undefined) {
    contents.CORSConfiguration = deserializeAws_restXmlCORSConfiguration(output["CORSConfiguration"], context);
  }
  if (output["RefererConfiguration"] !== undefined) {
    contents.RefererConfiguration = deserializeAws_restXmlRefererConfiguration(output["RefererConfiguration"], context);
  }
  if (output["ServerSideEncryptionConfiguration"] !== undefined) {
    contents.ServerSideEncryptionConfiguration = deserializeAws_restXmlServerSideEncryptionConfiguration(
      output["ServerSideEncryptionConfiguration"],
      context
    );
  }
  if (output["LoggingConfiguration"] !== undefined) {
    contents.LoggingConfiguration = deserializeAws_restXmlBucketLoggingConfiguration(
      output["LoggingConfiguration"],
      context
    );
  }
  if (output["TaggingConfiguration"] !== undefined) {
    contents.TaggingConfiguration = deserializeAws_restXmlTaggingConfiguration(output["TaggingConfiguration"], context);
  }
  if (output["PolicyConfiguration"] !== undefined) {
    contents.PolicyConfiguration = deserializeAws_restXmlPolicyConfiguration(output["PolicyConfiguration"], context);
  }
  if (output["QoSConfiguration"] !== undefined) {
    contents.QoSConfiguration = deserializeAws_restXmlQoSConfiguration(output["QoSConfiguration"], context);
  }
  if (output["ArchiveDirectReadConfiguration"] !== undefined) {
    contents.ArchiveDirectReadConfiguration = deserializeAws_restXmlArchiveDirectReadConfiguration(
      output["ArchiveDirectReadConfiguration"],
      context
    );
  }
  if (output["BtsConfiguration"] !== undefined) {
    contents.BtsConfiguration = deserializeAws_restXmlBtsConfiguration(output["BtsConfiguration"], context);
  }
  if (output["StatisticConfiguration"] !== undefined) {
    contents.StatisticConfiguration = deserializeAws_restXmlStatisticConfiguration(
      output["StatisticConfiguration"],
      context
    );
  }
  if (output["BucketRedundancyConfiguration"] !== undefined) {
    contents.BucketRedundancyConfiguration = deserializeAws_restXmlBucketRedundancyConfiguration(
      output["BucketRedundancyConfiguration"],
      context
    );
  }
  if (output["DefaultStorageClass"] !== undefined) {
    contents.DefaultStorageClass = output["DefaultStorageClass"];
  }
  if (output["RepPairConfiguration"] !== undefined) {
    contents.RepPairConfiguration = deserializeAws_restXmlRepPairConfiguration(output["RepPairConfiguration"], context);
  }
  if (output["DedupConfiguration"] !== undefined) {
    contents.DedupConfiguration = deserializeAws_restXmlBucketDedupConfiguration(output["DedupConfiguration"], context);
  }
  if (output["TrashConfiguration"] !== undefined) {
    contents.TrashConfiguration = deserializeAws_restXmlTrashConfiguration(output["TrashConfiguration"], context);
  }
  if (output["SnapConfiguration"] !== undefined) {
    contents.SnapConfiguration = deserializeAws_restXmlTrashConfiguration(output["SnapConfiguration"], context);
  }
  if (output["GlacierConfiguration"] !== undefined) {
    contents.GlacierConfiguration = output["GlacierConfiguration"];
  }
  if (output.StorageClassStatistics === "") {
    contents.StorageClassStatistics = [];
  }
  if (output["StorageClassStatistics"] !== undefined && output["StorageClassStatistics"]["member"] !== undefined) {
    contents.StorageClassStatistics = deserializeAws_restXmlStorageClassStatistics(
      __getArrayIfSingleItem(output["StorageClassStatistics"]["member"]),
      context
    );
  }
  if (output["ArchivedObjectNumber"] !== undefined) {
    contents.ArchivedObjectNumber = parseInt(output["ArchivedObjectNumber"]);
  }
  if (output["ArchivedObjectSize"] !== undefined) {
    contents.ArchivedObjectSize = parseInt(output["ArchivedObjectSize"]);
  }
  if (output["RestoredObjectNumber"] !== undefined) {
    contents.RestoredObjectNumber = parseInt(output["RestoredObjectNumber"]);
  }
  if (output["RestoredObjectSize"] !== undefined) {
    contents.RestoredObjectSize = parseInt(output["RestoredObjectSize"]);
  }
  if (output["CompressionConfiguration"] !== undefined) {
    contents.CompressionConfiguration = deserializeAws_restXmlCompressionConfigurations(
      output["CompressionConfiguration"],
      context
    );
  }
  if (output["HistoryCompressionConfiguration"] !== undefined) {
    contents.HistoryCompressionConfiguration = deserializeAws_restXmlCompressionConfigurations(
      output["HistoryCompressionConfiguration"],
      context
    );
  }
  if (output["IsGlobalBucket"] !== undefined) {
    contents.IsGlobalBucket = output["IsGlobalBucket"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlBucketDedupConfiguration = (
  output: any,
  context: __SerdeContext
): BucketDedupConfiguration => {
  let contents: any = {
    Status: undefined,
    Num: undefined,
    Size: undefined,
    DedupNum: undefined,
    DedupSize: undefined,
    Region: undefined,
    CompareByte: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["Num"] !== undefined) {
    contents.Num = parseInt(output["Num"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["DedupNum"] !== undefined) {
    contents.DedupNum = parseInt(output["DedupNum"]);
  }
  if (output["DedupSize"] !== undefined) {
    contents.DedupSize = parseInt(output["DedupSize"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["CompareByte"] !== undefined) {
    contents.CompareByte = output["CompareByte"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlBucketLifecycleConfiguration = (
  output: any,
  context: __SerdeContext
): BucketLifecycleConfiguration => {
  let contents: any = {
    Rules: undefined,
    Status: undefined,
  };
  if (output.Rule === "") {
    contents.Rules = [];
  }
  if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlLifecycleRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlBucketLoggingConfiguration = (
  output: any,
  context: __SerdeContext
): BucketLoggingConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlBucketOSCPConfiguration = (
  output: any,
  context: __SerdeContext
): BucketOSCPConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlBucketRedundancyConfiguration = (
  output: any,
  context: __SerdeContext
): BucketRedundancyConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlBuckets = (output: any, context: __SerdeContext): Bucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlBucket(entry, context);
    });
};

const deserializeAws_restXmlBucketTrashObj = (output: any, context: __SerdeContext): BucketTrashObj => {
  let contents: any = {
    Key: undefined,
    Token: undefined,
    LastModified: undefined,
    DeletedTime: undefined,
    Size: undefined,
    StorageClass: undefined,
    VersionId: undefined,
    Owner: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Token"] !== undefined) {
    contents.Token = output["Token"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["DeletedTime"] !== undefined) {
    contents.DeletedTime = new Date(output["DeletedTime"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlBucketTrashObjList = (output: any, context: __SerdeContext): BucketTrashObj[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlBucketTrashObj(entry, context);
    });
};

const deserializeAws_restXmlCommonPrefix = (output: any, context: __SerdeContext): CommonPrefix => {
  let contents: any = {
    Prefix: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};

const deserializeAws_restXmlCommonPrefixList = (output: any, context: __SerdeContext): CommonPrefix[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlCommonPrefix(entry, context);
    });
};

const deserializeAws_restXmlCompressionConfiguration = (
  output: any,
  context: __SerdeContext
): CompressionConfiguration => {
  let contents: any = {
    Mode: undefined,
    Status: undefined,
    MinSize: undefined,
    Rule: undefined,
  };
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = parseInt(output["MinSize"]);
  }
  if (output["Rule"] !== undefined) {
    contents.Rule = deserializeAws_restXmlCompressionRule(output["Rule"], context);
  }
  return contents;
};

const deserializeAws_restXmlCompressionConfigurations = (
  output: any,
  context: __SerdeContext
): CompressionConfigurations => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlCompressionRule = (output: any, context: __SerdeContext): CompressionRule => {
  let contents: any = {
    CompressFilter: undefined,
    NotCompressFilter: undefined,
  };
  if (output["CompressFilter"] !== undefined) {
    contents.CompressFilter = deserializeAws_restXmlNotOrCompressFilter(output["CompressFilter"], context);
  }
  if (output["NotCompressFilter"] !== undefined) {
    contents.NotCompressFilter = deserializeAws_restXmlNotOrCompressFilter(output["NotCompressFilter"], context);
  }
  return contents;
};

const deserializeAws_restXmlCondition = (output: any, context: __SerdeContext): Condition => {
  let contents: any = {
    HttpErrorCodeReturnedEquals: undefined,
    KeyPrefixEquals: undefined,
  };
  if (output["HttpErrorCodeReturnedEquals"] !== undefined) {
    contents.HttpErrorCodeReturnedEquals = output["HttpErrorCodeReturnedEquals"];
  }
  if (output["KeyPrefixEquals"] !== undefined) {
    contents.KeyPrefixEquals = output["KeyPrefixEquals"];
  }
  return contents;
};

const deserializeAws_restXmlCopyObjectResult = (output: any, context: __SerdeContext): CopyObjectResult => {
  let contents: any = {
    ETag: undefined,
    LastModified: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  return contents;
};

const deserializeAws_restXmlCopyPartResult = (output: any, context: __SerdeContext): CopyPartResult => {
  let contents: any = {
    ETag: undefined,
    LastModified: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  return contents;
};

const deserializeAws_restXmlCORSConfiguration = (output: any, context: __SerdeContext): CORSConfiguration => {
  let contents: any = {
    CORSRules: undefined,
    Status: undefined,
  };
  if (output.CORSRule === "") {
    contents.CORSRules = [];
  }
  if (output["CORSRule"] !== undefined) {
    contents.CORSRules = deserializeAws_restXmlCORSRules(__getArrayIfSingleItem(output["CORSRule"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlCORSRule = (output: any, context: __SerdeContext): CORSRule => {
  let contents: any = {
    AllowedHeaders: undefined,
    AllowedMethods: undefined,
    AllowedOrigins: undefined,
    ExposeHeaders: undefined,
    MaxAgeSeconds: undefined,
  };
  if (output.AllowedHeader === "") {
    contents.AllowedHeaders = [];
  }
  if (output["AllowedHeader"] !== undefined) {
    contents.AllowedHeaders = deserializeAws_restXmlAllowedHeaders(
      __getArrayIfSingleItem(output["AllowedHeader"]),
      context
    );
  }
  if (output.AllowedMethod === "") {
    contents.AllowedMethods = [];
  }
  if (output["AllowedMethod"] !== undefined) {
    contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(
      __getArrayIfSingleItem(output["AllowedMethod"]),
      context
    );
  }
  if (output.AllowedOrigin === "") {
    contents.AllowedOrigins = [];
  }
  if (output["AllowedOrigin"] !== undefined) {
    contents.AllowedOrigins = deserializeAws_restXmlAllowedOrigins(
      __getArrayIfSingleItem(output["AllowedOrigin"]),
      context
    );
  }
  if (output.ExposeHeader === "") {
    contents.ExposeHeaders = [];
  }
  if (output["ExposeHeader"] !== undefined) {
    contents.ExposeHeaders = deserializeAws_restXmlExposeHeaders(
      __getArrayIfSingleItem(output["ExposeHeader"]),
      context
    );
  }
  if (output["MaxAgeSeconds"] !== undefined) {
    contents.MaxAgeSeconds = parseInt(output["MaxAgeSeconds"]);
  }
  return contents;
};

const deserializeAws_restXmlCORSRules = (output: any, context: __SerdeContext): CORSRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlCORSRule(entry, context);
    });
};

const deserializeAws_restXmlDefaultRetention = (output: any, context: __SerdeContext): DefaultRetention => {
  let contents: any = {
    Mode: undefined,
    Days: undefined,
    Years: undefined,
    Months: undefined,
  };
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Years"] !== undefined) {
    contents.Years = parseInt(output["Years"]);
  }
  if (output["Months"] !== undefined) {
    contents.Months = parseInt(output["Months"]);
  }
  return contents;
};

const deserializeAws_restXmlDeletedObject = (output: any, context: __SerdeContext): DeletedObject => {
  let contents: any = {
    Key: undefined,
    Token: undefined,
    VersionId: undefined,
    DeleteMarker: undefined,
    DeleteMarkerVersionId: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Token"] !== undefined) {
    contents.Token = output["Token"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["DeleteMarker"] !== undefined) {
    contents.DeleteMarker = output["DeleteMarker"] == "true";
  }
  if (output["DeleteMarkerVersionId"] !== undefined) {
    contents.DeleteMarkerVersionId = output["DeleteMarkerVersionId"];
  }
  return contents;
};

const deserializeAws_restXmlDeletedObjects = (output: any, context: __SerdeContext): DeletedObject[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlDeletedObject(entry, context);
    });
};

const deserializeAws_restXmlDeleteMarkerEntry = (output: any, context: __SerdeContext): DeleteMarkerEntry => {
  let contents: any = {
    Owner: undefined,
    Key: undefined,
    VersionId: undefined,
    IsLatest: undefined,
    LastModified: undefined,
  };
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["IsLatest"] !== undefined) {
    contents.IsLatest = output["IsLatest"] == "true";
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  return contents;
};

const deserializeAws_restXmlDeleteMarkerReplication = (
  output: any,
  context: __SerdeContext
): DeleteMarkerReplication => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlDeleteMarkers = (output: any, context: __SerdeContext): DeleteMarkerEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlDeleteMarkerEntry(entry, context);
    });
};

const deserializeAws_restXmlDestination = (output: any, context: __SerdeContext): Destination => {
  let contents: any = {
    Bucket: undefined,
    Account: undefined,
    StorageClass: undefined,
    AccessControlTranslation: undefined,
    EncryptionConfiguration: undefined,
    ReplicationTime: undefined,
    Metrics: undefined,
  };
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["AccessControlTranslation"] !== undefined) {
    contents.AccessControlTranslation = deserializeAws_restXmlAccessControlTranslation(
      output["AccessControlTranslation"],
      context
    );
  }
  if (output["EncryptionConfiguration"] !== undefined) {
    contents.EncryptionConfiguration = deserializeAws_restXmlEncryptionConfiguration(
      output["EncryptionConfiguration"],
      context
    );
  }
  if (output["ReplicationTime"] !== undefined) {
    contents.ReplicationTime = deserializeAws_restXmlReplicationTime(output["ReplicationTime"], context);
  }
  if (output["Metrics"] !== undefined) {
    contents.Metrics = deserializeAws_restXmlMetrics(output["Metrics"], context);
  }
  return contents;
};

const deserializeAws_restXmlDirectoryList = (output: any, context: __SerdeContext): PolicySourceGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlPolicySourceGroup(entry, context);
    });
};

const deserializeAws_restXmlDomainNameList = (output: any, context: __SerdeContext): DomainNames[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlDomainNames(entry, context);
    });
};

const deserializeAws_restXmlDomainNames = (output: any, context: __SerdeContext): DomainNames => {
  let contents: any = {
    DomainName: undefined,
  };
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  return contents;
};

const deserializeAws_restXmlEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  let contents: any = {
    ReplicaKmsKeyID: undefined,
  };
  if (output["ReplicaKmsKeyID"] !== undefined) {
    contents.ReplicaKmsKeyID = output["ReplicaKmsKeyID"];
  }
  return contents;
};

const deserializeAws_restXml_Error = (output: any, context: __SerdeContext): _Error => {
  let contents: any = {
    Key: undefined,
    Token: undefined,
    VersionId: undefined,
    Code: undefined,
    Message: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Token"] !== undefined) {
    contents.Token = output["Token"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_restXmlErrorDocument = (output: any, context: __SerdeContext): ErrorDocument => {
  let contents: any = {
    Key: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  return contents;
};

const deserializeAws_restXmlErrors = (output: any, context: __SerdeContext): _Error[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXml_Error(entry, context);
    });
};

const deserializeAws_restXmlEventList = (output: any, context: __SerdeContext): (Event | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlExistingObjectReplication = (
  output: any,
  context: __SerdeContext
): ExistingObjectReplication => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlExposeHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlFilterRule = (output: any, context: __SerdeContext): FilterRule => {
  let contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_restXmlFilterRuleList = (output: any, context: __SerdeContext): FilterRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlFilterRule(entry, context);
    });
};

const deserializeAws_restXmlGetBucketStorageInfoResult = (
  output: any,
  context: __SerdeContext
): GetBucketStorageInfoResult => {
  let contents: any = {
    ObjectNumber: undefined,
    PhysicalSize: undefined,
    Size: undefined,
    TrashObjectNumber: undefined,
    TrashSize: undefined,
  };
  if (output["ObjectNumber"] !== undefined) {
    contents.ObjectNumber = parseInt(output["ObjectNumber"]);
  }
  if (output["PhysicalSize"] !== undefined) {
    contents.PhysicalSize = parseInt(output["PhysicalSize"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["TrashObjectNumber"] !== undefined) {
    contents.TrashObjectNumber = parseInt(output["TrashObjectNumber"]);
  }
  if (output["TrashSize"] !== undefined) {
    contents.TrashSize = parseInt(output["TrashSize"]);
  }
  return contents;
};

const deserializeAws_restXmlGrant = (output: any, context: __SerdeContext): Grant => {
  let contents: any = {
    Grantee: undefined,
    Permission: undefined,
    Delivered: undefined,
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = output["Permission"];
  }
  if (output["Delivered"] !== undefined) {
    contents.Delivered = output["Delivered"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlGrantee = (output: any, context: __SerdeContext): Grantee => {
  let contents: any = {
    DisplayName: undefined,
    EmailAddress: undefined,
    ID: undefined,
    URI: undefined,
    Type: undefined,
  };
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["EmailAddress"] !== undefined) {
    contents.EmailAddress = output["EmailAddress"];
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["URI"] !== undefined) {
    contents.URI = output["URI"];
  }
  if (output["xsi:type"] !== undefined) {
    contents.Type = output["xsi:type"];
  }
  return contents;
};

const deserializeAws_restXmlGrants = (output: any, context: __SerdeContext): Grant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlGrant(entry, context);
    });
};

const deserializeAws_restXmlIndexDocument = (output: any, context: __SerdeContext): IndexDocument => {
  let contents: any = {
    Suffix: undefined,
  };
  if (output["Suffix"] !== undefined) {
    contents.Suffix = output["Suffix"];
  }
  return contents;
};

const deserializeAws_restXmlInitiator = (output: any, context: __SerdeContext): Initiator => {
  let contents: any = {
    ID: undefined,
    DisplayName: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  return contents;
};

const deserializeAws_restXmlIntelligentTieringAndOperator = (
  output: any,
  context: __SerdeContext
): IntelligentTieringAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlIntelligentTieringConfiguration = (
  output: any,
  context: __SerdeContext
): IntelligentTieringConfiguration => {
  let contents: any = {
    Id: undefined,
    Filter: undefined,
    Status: undefined,
    Tierings: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlIntelligentTieringFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output.Tiering === "") {
    contents.Tierings = [];
  }
  if (output["Tiering"] !== undefined) {
    contents.Tierings = deserializeAws_restXmlTieringList(__getArrayIfSingleItem(output["Tiering"]), context);
  }
  return contents;
};

const deserializeAws_restXmlIntelligentTieringConfigurationList = (
  output: any,
  context: __SerdeContext
): IntelligentTieringConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlIntelligentTieringConfiguration(entry, context);
    });
};

const deserializeAws_restXmlIntelligentTieringFilter = (
  output: any,
  context: __SerdeContext
): IntelligentTieringFilter => {
  let contents: any = {
    Prefix: undefined,
    Tag: undefined,
    And: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlIntelligentTieringAndOperator(output["And"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventoryConfiguration = (output: any, context: __SerdeContext): InventoryConfiguration => {
  let contents: any = {
    Destination: undefined,
    IsEnabled: undefined,
    Filter: undefined,
    Id: undefined,
    IncludedObjectVersions: undefined,
    OptionalFields: undefined,
    Schedule: undefined,
  };
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlInventoryDestination(output["Destination"], context);
  }
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = output["IsEnabled"] == "true";
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlInventoryFilter(output["Filter"], context);
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["IncludedObjectVersions"] !== undefined) {
    contents.IncludedObjectVersions = output["IncludedObjectVersions"];
  }
  if (output.OptionalFields === "") {
    contents.OptionalFields = [];
  }
  if (output["OptionalFields"] !== undefined && output["OptionalFields"]["Field"] !== undefined) {
    contents.OptionalFields = deserializeAws_restXmlInventoryOptionalFields(
      __getArrayIfSingleItem(output["OptionalFields"]["Field"]),
      context
    );
  }
  if (output["Schedule"] !== undefined) {
    contents.Schedule = deserializeAws_restXmlInventorySchedule(output["Schedule"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventoryConfigurationList = (
  output: any,
  context: __SerdeContext
): InventoryConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlInventoryConfiguration(entry, context);
    });
};

const deserializeAws_restXmlInventoryDestination = (output: any, context: __SerdeContext): InventoryDestination => {
  let contents: any = {
    S3BucketDestination: undefined,
  };
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = deserializeAws_restXmlInventoryS3BucketDestination(
      output["S3BucketDestination"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlInventoryEncryption = (output: any, context: __SerdeContext): InventoryEncryption => {
  let contents: any = {
    SSES3: undefined,
    SSEKMS: undefined,
  };
  if (output["SSE-S3"] !== undefined) {
    contents.SSES3 = deserializeAws_restXmlSSES3(output["SSE-S3"], context);
  }
  if (output["SSE-KMS"] !== undefined) {
    contents.SSEKMS = deserializeAws_restXmlSSEKMS(output["SSE-KMS"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventoryFilter = (output: any, context: __SerdeContext): InventoryFilter => {
  let contents: any = {
    Prefix: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};

const deserializeAws_restXmlInventoryOptionalFields = (
  output: any,
  context: __SerdeContext
): (InventoryOptionalField | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlInventoryS3BucketDestination = (
  output: any,
  context: __SerdeContext
): InventoryS3BucketDestination => {
  let contents: any = {
    AccountId: undefined,
    Bucket: undefined,
    Format: undefined,
    Prefix: undefined,
    Encryption: undefined,
  };
  if (output["AccountId"] !== undefined) {
    contents.AccountId = output["AccountId"];
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Encryption"] !== undefined) {
    contents.Encryption = deserializeAws_restXmlInventoryEncryption(output["Encryption"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventorySchedule = (output: any, context: __SerdeContext): InventorySchedule => {
  let contents: any = {
    Frequency: undefined,
  };
  if (output["Frequency"] !== undefined) {
    contents.Frequency = output["Frequency"];
  }
  return contents;
};

const deserializeAws_restXmlLambdaFunctionConfiguration = (
  output: any,
  context: __SerdeContext
): LambdaFunctionConfiguration => {
  let contents: any = {
    Id: undefined,
    LambdaFunctionArn: undefined,
    Events: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["CloudFunction"] !== undefined) {
    contents.LambdaFunctionArn = output["CloudFunction"];
  }
  if (output.Event === "") {
    contents.Events = [];
  }
  if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlLambdaFunctionConfigurationList = (
  output: any,
  context: __SerdeContext
): LambdaFunctionConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlLambdaFunctionConfiguration(entry, context);
    });
};

const deserializeAws_restXmlLifecycleAndRuleOperator = (
  output: any,
  context: __SerdeContext
): LifecycleAndRuleOperator => {
  let contents: any = {
    Prefix: undefined,
    PrefixNotMatch: undefined,
    Suffix: undefined,
    SuffixNotMatch: undefined,
    ObjectSizeLessThan: undefined,
    ObjectSizeLessThanOrEqualTo: undefined,
    ObjectSizeEqualTo: undefined,
    ObjectSizeBetween: undefined,
    ObjectSizeGreaterThanOrEqualTo: undefined,
    ObjectSizeGreaterThan: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["PrefixNotMatch"] !== undefined) {
    contents.PrefixNotMatch = output["PrefixNotMatch"];
  }
  if (output["Suffix"] !== undefined) {
    contents.Suffix = output["Suffix"];
  }
  if (output["SuffixNotMatch"] !== undefined) {
    contents.SuffixNotMatch = output["SuffixNotMatch"];
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    contents.ObjectSizeLessThan = parseInt(output["ObjectSizeLessThan"]);
  }
  if (output["ObjectSizeLessThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeLessThanOrEqualTo = parseInt(output["ObjectSizeLessThanOrEqualTo"]);
  }
  if (output["ObjectSizeEqualTo"] !== undefined) {
    contents.ObjectSizeEqualTo = parseInt(output["ObjectSizeEqualTo"]);
  }
  if (output["ObjectSizeBetween"] !== undefined) {
    contents.ObjectSizeBetween = deserializeAws_restXmlObjectSizeRange(output["ObjectSizeBetween"], context);
  }
  if (output["ObjectSizeGreaterThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeGreaterThanOrEqualTo = parseInt(output["ObjectSizeGreaterThanOrEqualTo"]);
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    contents.ObjectSizeGreaterThan = parseInt(output["ObjectSizeGreaterThan"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleExpiration = (output: any, context: __SerdeContext): LifecycleExpiration => {
  let contents: any = {
    Date: undefined,
    Days: undefined,
    Hours: undefined,
    Minutes: undefined,
    ExpiredObjectDeleteMarker: undefined,
  };
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Hours"] !== undefined) {
    contents.Hours = parseInt(output["Hours"]);
  }
  if (output["Minutes"] !== undefined) {
    contents.Minutes = parseInt(output["Minutes"]);
  }
  if (output["ExpiredObjectDeleteMarker"] !== undefined) {
    contents.ExpiredObjectDeleteMarker = output["ExpiredObjectDeleteMarker"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlLifecycleOrRuleOperator = (
  output: any,
  context: __SerdeContext
): LifecycleOrRuleOperator => {
  let contents: any = {
    Prefix: undefined,
    PrefixNotMatch: undefined,
    Suffix: undefined,
    SuffixNotMatch: undefined,
    ObjectSizeLessThan: undefined,
    ObjectSizeLessThanOrEqualTo: undefined,
    ObjectSizeEqualTo: undefined,
    ObjectSizeBetween: undefined,
    ObjectSizeGreaterThanOrEqualTo: undefined,
    ObjectSizeGreaterThan: undefined,
    Tag: undefined,
    And: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["PrefixNotMatch"] !== undefined) {
    contents.PrefixNotMatch = output["PrefixNotMatch"];
  }
  if (output["Suffix"] !== undefined) {
    contents.Suffix = output["Suffix"];
  }
  if (output["SuffixNotMatch"] !== undefined) {
    contents.SuffixNotMatch = output["SuffixNotMatch"];
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    contents.ObjectSizeLessThan = parseInt(output["ObjectSizeLessThan"]);
  }
  if (output["ObjectSizeLessThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeLessThanOrEqualTo = parseInt(output["ObjectSizeLessThanOrEqualTo"]);
  }
  if (output["ObjectSizeEqualTo"] !== undefined) {
    contents.ObjectSizeEqualTo = parseInt(output["ObjectSizeEqualTo"]);
  }
  if (output["ObjectSizeBetween"] !== undefined) {
    contents.ObjectSizeBetween = deserializeAws_restXmlObjectSizeRange(output["ObjectSizeBetween"], context);
  }
  if (output["ObjectSizeGreaterThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeGreaterThanOrEqualTo = parseInt(output["ObjectSizeGreaterThanOrEqualTo"]);
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    contents.ObjectSizeGreaterThan = parseInt(output["ObjectSizeGreaterThan"]);
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlTagMultiInOrMode(output["And"], context);
  }
  return contents;
};

const deserializeAws_restXmlLifecyclePeriod = (output: any, context: __SerdeContext): LifecyclePeriod => {
  let contents: any = {
    Start: undefined,
    End: undefined,
  };
  if (output["Start"] !== undefined) {
    contents.Start = output["Start"];
  }
  if (output["End"] !== undefined) {
    contents.End = output["End"];
  }
  return contents;
};

const deserializeAws_restXmlLifecyclePeriodList = (output: any, context: __SerdeContext): LifecyclePeriod[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlLifecyclePeriod(entry, context);
    });
};

const deserializeAws_restXmlLifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  let contents: any = {
    Expiration: undefined,
    RestoreExpiration: undefined,
    BucketExpiration: undefined,
    ID: undefined,
    Prefix: undefined,
    Filter: undefined,
    Status: undefined,
    Transitions: undefined,
    NoncurrentVersionTransitions: undefined,
    NoncurrentVersionExpiration: undefined,
    AbortIncompleteMultipartUpload: undefined,
    RunningTimes: undefined,
    DeletedObjectToTrash: undefined,
  };
  if (output["Expiration"] !== undefined) {
    contents.Expiration = deserializeAws_restXmlLifecycleExpiration(output["Expiration"], context);
  }
  if (output["RestoreExpiration"] !== undefined) {
    contents.RestoreExpiration = deserializeAws_restXmlRestoreExpiration(output["RestoreExpiration"], context);
  }
  if (output["BucketExpiration"] !== undefined) {
    contents.BucketExpiration = deserializeAws_restXmlLifecycleExpiration(output["BucketExpiration"], context);
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlLifecycleRuleFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output.Transition === "") {
    contents.Transitions = [];
  }
  if (output["Transition"] !== undefined) {
    contents.Transitions = deserializeAws_restXmlTransitionList(__getArrayIfSingleItem(output["Transition"]), context);
  }
  if (output.NoncurrentVersionTransition === "") {
    contents.NoncurrentVersionTransitions = [];
  }
  if (output["NoncurrentVersionTransition"] !== undefined) {
    contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList(
      __getArrayIfSingleItem(output["NoncurrentVersionTransition"]),
      context
    );
  }
  if (output["NoncurrentVersionExpiration"] !== undefined) {
    contents.NoncurrentVersionExpiration = deserializeAws_restXmlNoncurrentVersionExpiration(
      output["NoncurrentVersionExpiration"],
      context
    );
  }
  if (output["AbortIncompleteMultipartUpload"] !== undefined) {
    contents.AbortIncompleteMultipartUpload = deserializeAws_restXmlAbortIncompleteMultipartUpload(
      output["AbortIncompleteMultipartUpload"],
      context
    );
  }
  if (output["RunningTime"] !== undefined) {
    contents.RunningTimes = deserializeAws_restXmlLifecycleRunningTimes(output["RunningTime"], context);
  }
  if (output["DeletedObjectToTrash"] !== undefined) {
    contents.DeletedObjectToTrash = output["DeletedObjectToTrash"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlLifecycleAndRuleOperator(output["And"], context),
    };
  }
  if (output["Or"] !== undefined) {
    return {
      Or: deserializeAws_restXmlLifecycleOrRuleOperator(output["Or"], context),
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: output["Prefix"],
    };
  }
  if (output["PrefixNotMatch"] !== undefined) {
    return {
      PrefixNotMatch: output["PrefixNotMatch"],
    };
  }
  if (output["Suffix"] !== undefined) {
    return {
      Suffix: output["Suffix"],
    };
  }
  if (output["SuffixNotMatch"] !== undefined) {
    return {
      SuffixNotMatch: output["SuffixNotMatch"],
    };
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    return {
      ObjectSizeLessThan: parseInt(output["ObjectSizeLessThan"]),
    };
  }
  if (output["ObjectSizeLessThanOrEqualTo"] !== undefined) {
    return {
      ObjectSizeLessThanOrEqualTo: parseInt(output["ObjectSizeLessThanOrEqualTo"]),
    };
  }
  if (output["ObjectSizeEqualTo"] !== undefined) {
    return {
      ObjectSizeEqualTo: parseInt(output["ObjectSizeEqualTo"]),
    };
  }
  if (output["ObjectSizeBetween"] !== undefined) {
    return {
      ObjectSizeBetween: deserializeAws_restXmlObjectSizeRange(output["ObjectSizeBetween"], context),
    };
  }
  if (output["ObjectSizeGreaterThanOrEqualTo"] !== undefined) {
    return {
      ObjectSizeGreaterThanOrEqualTo: parseInt(output["ObjectSizeGreaterThanOrEqualTo"]),
    };
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    return {
      ObjectSizeGreaterThan: parseInt(output["ObjectSizeGreaterThan"]),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlLifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlLifecycleRule(entry, context);
    });
};

const deserializeAws_restXmlLifecycleRunningTimes = (output: any, context: __SerdeContext): LifecycleRunningTimes => {
  let contents: any = {
    Period: undefined,
  };
  if (output.Period === "") {
    contents.Period = [];
  }
  if (output["Period"] !== undefined) {
    contents.Period = deserializeAws_restXmlLifecyclePeriodList(__getArrayIfSingleItem(output["Period"]), context);
  }
  return contents;
};

const deserializeAws_restXmlListBucketAllSnapshotResult = (
  output: any,
  context: __SerdeContext
): ListBucketAllSnapshotResult => {
  let contents: any = {
    BucketName: undefined,
    TotalSnapshot: undefined,
    Snapshots: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    NextMarker: undefined,
  };
  if (output["BucketName"] !== undefined) {
    contents.BucketName = output["BucketName"];
  }
  if (output["TotalSnapshot"] !== undefined) {
    contents.TotalSnapshot = parseInt(output["TotalSnapshot"]);
  }
  if (output.Snapshot === "") {
    contents.Snapshots = [];
  }
  if (output["Snapshot"] !== undefined) {
    contents.Snapshots = deserializeAws_restXmlSnapshotList(__getArrayIfSingleItem(output["Snapshot"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  return contents;
};

const deserializeAws_restXmlListBucketResult = (output: any, context: __SerdeContext): ListBucketResult => {
  let contents: any = {
    Bucket: undefined,
    Owner: undefined,
  };
  if (output["Bucket"] !== undefined) {
    contents.Bucket = deserializeAws_restXmlBucket(output["Bucket"], context);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlListBucketSnapshotObjectResult = (
  output: any,
  context: __SerdeContext
): ListBucketSnapshotObjectResult => {
  let contents: any = {
    BucketName: undefined,
    BucketSnapshotName: undefined,
    IsTruncated: undefined,
    Prefix: undefined,
    Delimiter: undefined,
    MaxKeys: undefined,
    Marker: undefined,
    NextMarker: undefined,
    CommonPrefixes: undefined,
    Contents: undefined,
  };
  if (output["BucketName"] !== undefined) {
    contents.BucketName = output["BucketName"];
  }
  if (output["BucketSnapshotName"] !== undefined) {
    contents.BucketSnapshotName = output["BucketSnapshotName"];
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Delimiter"] !== undefined) {
    contents.Delimiter = output["Delimiter"];
  }
  if (output["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(output["MaxKeys"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (output["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(output["CommonPrefixes"]),
      context
    );
  }
  if (output.Contents === "") {
    contents.Contents = [];
  }
  if (output["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlObjectList(__getArrayIfSingleItem(output["Contents"]), context);
  }
  return contents;
};

const deserializeAws_restXmlListBucketTrashResult = (output: any, context: __SerdeContext): ListBucketTrashResult => {
  let contents: any = {
    IsTruncated: undefined,
    Marker: undefined,
    NextMarker: undefined,
    MaxKeys: undefined,
    Name: undefined,
    Prefix: undefined,
    BeginTime: undefined,
    EndTime: undefined,
    Contents: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(output["MaxKeys"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["BeginTime"] !== undefined) {
    contents.BeginTime = new Date(output["BeginTime"]);
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  if (output.Contents === "") {
    contents.Contents = [];
  }
  if (output["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlBucketTrashObjList(__getArrayIfSingleItem(output["Contents"]), context);
  }
  return contents;
};

const deserializeAws_restXmlLoggingEnabled = (output: any, context: __SerdeContext): LoggingEnabled => {
  let contents: any = {
    TargetBucket: undefined,
    TargetGrants: undefined,
    TargetPrefix: undefined,
  };
  if (output["TargetBucket"] !== undefined) {
    contents.TargetBucket = output["TargetBucket"];
  }
  if (output.TargetGrants === "") {
    contents.TargetGrants = [];
  }
  if (output["TargetGrants"] !== undefined && output["TargetGrants"]["Grant"] !== undefined) {
    contents.TargetGrants = deserializeAws_restXmlTargetGrants(
      __getArrayIfSingleItem(output["TargetGrants"]["Grant"]),
      context
    );
  }
  if (output["TargetPrefix"] !== undefined) {
    contents.TargetPrefix = output["TargetPrefix"];
  }
  return contents;
};

const deserializeAws_restXmlMetaSearchBucket = (output: any, context: __SerdeContext): MetaSearchBucket => {
  let contents: any = {
    BucketId: undefined,
    BucketName: undefined,
    AccountId: undefined,
    AccountName: undefined,
  };
  if (output["BucketId"] !== undefined) {
    contents.BucketId = parseInt(output["BucketId"]);
  }
  if (output["BucketName"] !== undefined) {
    contents.BucketName = output["BucketName"];
  }
  if (output["AccountId"] !== undefined) {
    contents.AccountId = output["AccountId"];
  }
  if (output["AccountName"] !== undefined) {
    contents.AccountName = output["AccountName"];
  }
  return contents;
};

const deserializeAws_restXmlMetaSearchBuckets = (output: any, context: __SerdeContext): MetaSearchBucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlMetaSearchBucket(entry, context);
    });
};

const deserializeAws_restXmlMetaSearchConfiguration = (
  output: any,
  context: __SerdeContext
): MetaSearchConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlMetrics = (output: any, context: __SerdeContext): Metrics => {
  let contents: any = {
    Status: undefined,
    EventThreshold: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["EventThreshold"] !== undefined) {
    contents.EventThreshold = deserializeAws_restXmlReplicationTimeValue(output["EventThreshold"], context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsAndOperator = (output: any, context: __SerdeContext): MetricsAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsConfiguration = (output: any, context: __SerdeContext): MetricsConfiguration => {
  let contents: any = {
    Id: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlMetricsFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsConfigurationList = (
  output: any,
  context: __SerdeContext
): MetricsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlMetricsConfiguration(entry, context);
    });
};

const deserializeAws_restXmlMetricsFilter = (output: any, context: __SerdeContext): MetricsFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: output["Prefix"],
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlMetricsAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlMode = (output: any, context: __SerdeContext): Mode => {
  let contents: any = {
    NeverExpire: undefined,
    Days: undefined,
  };
  if (output["NeverExpire"] !== undefined) {
    contents.NeverExpire = output["NeverExpire"] == "true";
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  return contents;
};

const deserializeAws_restXmlMultipartUpload = (output: any, context: __SerdeContext): MultipartUpload => {
  let contents: any = {
    UploadId: undefined,
    Key: undefined,
    Initiated: undefined,
    StorageClass: undefined,
    Owner: undefined,
    Initiator: undefined,
  };
  if (output["UploadId"] !== undefined) {
    contents.UploadId = output["UploadId"];
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Initiated"] !== undefined) {
    contents.Initiated = new Date(output["Initiated"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  if (output["Initiator"] !== undefined) {
    contents.Initiator = deserializeAws_restXmlInitiator(output["Initiator"], context);
  }
  return contents;
};

const deserializeAws_restXmlMultipartUploadList = (output: any, context: __SerdeContext): MultipartUpload[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlMultipartUpload(entry, context);
    });
};

const deserializeAws_restXmlNoncurrentVersionExpiration = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionExpiration => {
  let contents: any = {
    NoncurrentDays: undefined,
    NoncurrentHours: undefined,
    NoncurrentMinutes: undefined,
  };
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
  }
  if (output["NoncurrentHours"] !== undefined) {
    contents.NoncurrentHours = parseInt(output["NoncurrentHours"]);
  }
  if (output["NoncurrentMinutes"] !== undefined) {
    contents.NoncurrentMinutes = parseInt(output["NoncurrentMinutes"]);
  }
  return contents;
};

const deserializeAws_restXmlNoncurrentVersionTransition = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionTransition => {
  let contents: any = {
    NoncurrentDays: undefined,
    NoncurrentHours: undefined,
    NoncurrentMinutes: undefined,
    StorageClass: undefined,
    GlacierConfiguration: undefined,
  };
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
  }
  if (output["NoncurrentHours"] !== undefined) {
    contents.NoncurrentHours = parseInt(output["NoncurrentHours"]);
  }
  if (output["NoncurrentMinutes"] !== undefined) {
    contents.NoncurrentMinutes = parseInt(output["NoncurrentMinutes"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["GlacierConfiguration"] !== undefined) {
    contents.GlacierConfiguration = output["GlacierConfiguration"];
  }
  return contents;
};

const deserializeAws_restXmlNoncurrentVersionTransitionList = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionTransition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlNoncurrentVersionTransition(entry, context);
    });
};

const deserializeAws_restXmlNotificationConfigurationFilter = (
  output: any,
  context: __SerdeContext
): NotificationConfigurationFilter => {
  let contents: any = {
    Key: undefined,
  };
  if (output["S3Key"] !== undefined) {
    contents.Key = deserializeAws_restXmlS3KeyFilter(output["S3Key"], context);
  }
  return contents;
};

const deserializeAws_restXmlNotOrCompressFilter = (output: any, context: __SerdeContext): NotOrCompressFilter => {
  let contents: any = {
    Prefix: undefined,
    Suffix: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = deserializeAws_restXmlPrefixOrSuffix(output["Prefix"], context);
  }
  if (output["Suffix"] !== undefined) {
    contents.Suffix = deserializeAws_restXmlPrefixOrSuffix(output["Suffix"], context);
  }
  return contents;
};

const deserializeAws_restXml_Object = (output: any, context: __SerdeContext): _Object => {
  let contents: any = {
    Key: undefined,
    IsDeleteMarker: undefined,
    VersionId: undefined,
    LastModified: undefined,
    ETag: undefined,
    Size: undefined,
    FinalSize: undefined,
    StorageClass: undefined,
    GlacierConfiguration: undefined,
    GlacierRestoredStorageClass: undefined,
    IsEncrypted: undefined,
    IsCompressed: undefined,
    ObjectSource: undefined,
    Type: undefined,
    ObjectExpirationDay: undefined,
    RestoreOnGoing: undefined,
    RestoredExpiryDate: undefined,
    Owner: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["IsDeleteMarker"] !== undefined) {
    contents.IsDeleteMarker = output["IsDeleteMarker"] == "true";
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["FinalSize"] !== undefined) {
    contents.FinalSize = parseInt(output["FinalSize"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["GlacierConfiguration"] !== undefined) {
    contents.GlacierConfiguration = output["GlacierConfiguration"];
  }
  if (output["GlacierRestoredStorageClass"] !== undefined) {
    contents.GlacierRestoredStorageClass = output["GlacierRestoredStorageClass"];
  }
  if (output["IsEncrypted"] !== undefined) {
    contents.IsEncrypted = output["IsEncrypted"] == "true";
  }
  if (output["IsCompressed"] !== undefined) {
    contents.IsCompressed = output["IsCompressed"] == "true";
  }
  if (output["ObjectSource"] !== undefined) {
    contents.ObjectSource = output["ObjectSource"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["ObjectExpirationDay"] !== undefined) {
    contents.ObjectExpirationDay = parseInt(output["ObjectExpirationDay"]);
  }
  if (output["RestoreOnGoing"] !== undefined) {
    contents.RestoreOnGoing = output["RestoreOnGoing"];
  }
  if (output["RestoredExpiryDate"] !== undefined) {
    contents.RestoredExpiryDate = new Date(output["RestoredExpiryDate"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectList = (output: any, context: __SerdeContext): _Object[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXml_Object(entry, context);
    });
};

const deserializeAws_restXmlObjectLockConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLockConfiguration => {
  let contents: any = {
    ObjectLockEnabled: undefined,
    Rule: undefined,
    Status: undefined,
  };
  if (output["ObjectLockEnabled"] !== undefined) {
    contents.ObjectLockEnabled = output["ObjectLockEnabled"];
  }
  if (output["Rule"] !== undefined) {
    contents.Rule = deserializeAws_restXmlObjectLockRule(output["Rule"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlObjectLockLegalHold = (output: any, context: __SerdeContext): ObjectLockLegalHold => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlObjectLockRetention = (output: any, context: __SerdeContext): ObjectLockRetention => {
  let contents: any = {
    Mode: undefined,
    RetainUntilDate: undefined,
  };
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
  }
  return contents;
};

const deserializeAws_restXmlObjectLockRule = (output: any, context: __SerdeContext): ObjectLockRule => {
  let contents: any = {
    DefaultRetention: undefined,
  };
  if (output["DefaultRetention"] !== undefined) {
    contents.DefaultRetention = deserializeAws_restXmlDefaultRetention(output["DefaultRetention"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectSizeRange = (output: any, context: __SerdeContext): ObjectSizeRange => {
  let contents: any = {
    Start: undefined,
    End: undefined,
  };
  if (output["Start"] !== undefined) {
    contents.Start = parseInt(output["Start"]);
  }
  if (output["End"] !== undefined) {
    contents.End = parseInt(output["End"]);
  }
  return contents;
};

const deserializeAws_restXmlObjectVersion = (output: any, context: __SerdeContext): ObjectVersion => {
  let contents: any = {
    ETag: undefined,
    Size: undefined,
    FinalSize: undefined,
    StorageClass: undefined,
    ObjectSource: undefined,
    GlacierConfiguration: undefined,
    GlacierRestoredStorageClass: undefined,
    Key: undefined,
    VersionId: undefined,
    IsLatest: undefined,
    Type: undefined,
    LastModified: undefined,
    RestoreOnGoing: undefined,
    RestoredExpiryDate: undefined,
    Owner: undefined,
    IsEncrypted: undefined,
    IsCompressed: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["FinalSize"] !== undefined) {
    contents.FinalSize = parseInt(output["FinalSize"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["ObjectSource"] !== undefined) {
    contents.ObjectSource = output["ObjectSource"];
  }
  if (output["GlacierConfiguration"] !== undefined) {
    contents.GlacierConfiguration = output["GlacierConfiguration"];
  }
  if (output["GlacierRestoredStorageClass"] !== undefined) {
    contents.GlacierRestoredStorageClass = output["GlacierRestoredStorageClass"];
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["IsLatest"] !== undefined) {
    contents.IsLatest = output["IsLatest"] == "true";
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["RestoreOnGoing"] !== undefined) {
    contents.RestoreOnGoing = output["RestoreOnGoing"];
  }
  if (output["RestoredExpiryDate"] !== undefined) {
    contents.RestoredExpiryDate = new Date(output["RestoredExpiryDate"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  if (output["IsEncrypted"] !== undefined) {
    contents.IsEncrypted = output["IsEncrypted"] == "true";
  }
  if (output["IsCompressed"] !== undefined) {
    contents.IsCompressed = output["IsCompressed"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlObjectVersionList = (output: any, context: __SerdeContext): ObjectVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlObjectVersion(entry, context);
    });
};

const deserializeAws_restXmlOSCPPolicies = (output: any, context: __SerdeContext): OSCPPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlOSCPPolicy(entry, context);
    });
};

const deserializeAws_restXmlOSCPPolicy = (output: any, context: __SerdeContext): OSCPPolicy => {
  let contents: any = {
    ID: undefined,
    Filter: undefined,
    StorageClass: undefined,
    GlacierConfiguration: undefined,
    Priority: undefined,
    Comment: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlOSCPPolicyFilter(output["Filter"], context);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["GlacierConfiguration"] !== undefined) {
    contents.GlacierConfiguration = output["GlacierConfiguration"];
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = output["Comment"];
  }
  return contents;
};

const deserializeAws_restXmlOSCPPolicyAndRuleOperator = (
  output: any,
  context: __SerdeContext
): OSCPPolicyAndRuleOperator => {
  let contents: any = {
    Prefix: undefined,
    PrefixNotMatch: undefined,
    Suffix: undefined,
    SuffixNotMatch: undefined,
    ObjectSizeLessThan: undefined,
    ObjectSizeLessThanOrEqualTo: undefined,
    ObjectSizeEqualTo: undefined,
    ObjectSizeBetween: undefined,
    ObjectSizeGreaterThanOrEqualTo: undefined,
    ObjectSizeGreaterThan: undefined,
    UserMetadata: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["PrefixNotMatch"] !== undefined) {
    contents.PrefixNotMatch = output["PrefixNotMatch"];
  }
  if (output["Suffix"] !== undefined) {
    contents.Suffix = output["Suffix"];
  }
  if (output["SuffixNotMatch"] !== undefined) {
    contents.SuffixNotMatch = output["SuffixNotMatch"];
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    contents.ObjectSizeLessThan = parseInt(output["ObjectSizeLessThan"]);
  }
  if (output["ObjectSizeLessThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeLessThanOrEqualTo = parseInt(output["ObjectSizeLessThanOrEqualTo"]);
  }
  if (output["ObjectSizeEqualTo"] !== undefined) {
    contents.ObjectSizeEqualTo = parseInt(output["ObjectSizeEqualTo"]);
  }
  if (output["ObjectSizeBetween"] !== undefined) {
    contents.ObjectSizeBetween = deserializeAws_restXmlObjectSizeRange(output["ObjectSizeBetween"], context);
  }
  if (output["ObjectSizeGreaterThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeGreaterThanOrEqualTo = parseInt(output["ObjectSizeGreaterThanOrEqualTo"]);
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    contents.ObjectSizeGreaterThan = parseInt(output["ObjectSizeGreaterThan"]);
  }
  if (output["UserMetadata"] !== undefined) {
    contents.UserMetadata = deserializeAws_restXmlUserMetadataSingle(output["UserMetadata"], context);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlOSCPPolicyFilter = (output: any, context: __SerdeContext): OSCPPolicyFilter => {
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlOSCPPolicyAndRuleOperator(output["And"], context),
    };
  }
  if (output["Or"] !== undefined) {
    return {
      Or: deserializeAws_restXmlOSCPPolicyOrRuleOperator(output["Or"], context),
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: output["Prefix"],
    };
  }
  if (output["PrefixNotMatch"] !== undefined) {
    return {
      PrefixNotMatch: output["PrefixNotMatch"],
    };
  }
  if (output["Suffix"] !== undefined) {
    return {
      Suffix: output["Suffix"],
    };
  }
  if (output["SuffixNotMatch"] !== undefined) {
    return {
      SuffixNotMatch: output["SuffixNotMatch"],
    };
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    return {
      ObjectSizeLessThan: parseInt(output["ObjectSizeLessThan"]),
    };
  }
  if (output["ObjectSizeLessThanOrEqualTo"] !== undefined) {
    return {
      ObjectSizeLessThanOrEqualTo: parseInt(output["ObjectSizeLessThanOrEqualTo"]),
    };
  }
  if (output["ObjectSizeEqualTo"] !== undefined) {
    return {
      ObjectSizeEqualTo: parseInt(output["ObjectSizeEqualTo"]),
    };
  }
  if (output["ObjectSizeBetween"] !== undefined) {
    return {
      ObjectSizeBetween: deserializeAws_restXmlObjectSizeRange(output["ObjectSizeBetween"], context),
    };
  }
  if (output["ObjectSizeGreaterThanOrEqualTo"] !== undefined) {
    return {
      ObjectSizeGreaterThanOrEqualTo: parseInt(output["ObjectSizeGreaterThanOrEqualTo"]),
    };
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    return {
      ObjectSizeGreaterThan: parseInt(output["ObjectSizeGreaterThan"]),
    };
  }
  if (output["UserMetadata"] !== undefined) {
    return {
      UserMetadata: deserializeAws_restXmlUserMetadataSingle(output["UserMetadata"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlOSCPPolicyOrRuleOperator = (
  output: any,
  context: __SerdeContext
): OSCPPolicyOrRuleOperator => {
  let contents: any = {
    Prefix: undefined,
    PrefixNotMatch: undefined,
    Suffix: undefined,
    SuffixNotMatch: undefined,
    ObjectSizeLessThan: undefined,
    ObjectSizeLessThanOrEqualTo: undefined,
    ObjectSizeEqualTo: undefined,
    ObjectSizeBetween: undefined,
    ObjectSizeGreaterThanOrEqualTo: undefined,
    ObjectSizeGreaterThan: undefined,
    UserMetadata: undefined,
    Tag: undefined,
    And: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["PrefixNotMatch"] !== undefined) {
    contents.PrefixNotMatch = output["PrefixNotMatch"];
  }
  if (output["Suffix"] !== undefined) {
    contents.Suffix = output["Suffix"];
  }
  if (output["SuffixNotMatch"] !== undefined) {
    contents.SuffixNotMatch = output["SuffixNotMatch"];
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    contents.ObjectSizeLessThan = parseInt(output["ObjectSizeLessThan"]);
  }
  if (output["ObjectSizeLessThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeLessThanOrEqualTo = parseInt(output["ObjectSizeLessThanOrEqualTo"]);
  }
  if (output["ObjectSizeEqualTo"] !== undefined) {
    contents.ObjectSizeEqualTo = parseInt(output["ObjectSizeEqualTo"]);
  }
  if (output["ObjectSizeBetween"] !== undefined) {
    contents.ObjectSizeBetween = deserializeAws_restXmlObjectSizeRange(output["ObjectSizeBetween"], context);
  }
  if (output["ObjectSizeGreaterThanOrEqualTo"] !== undefined) {
    contents.ObjectSizeGreaterThanOrEqualTo = parseInt(output["ObjectSizeGreaterThanOrEqualTo"]);
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    contents.ObjectSizeGreaterThan = parseInt(output["ObjectSizeGreaterThan"]);
  }
  if (output["UserMetadata"] !== undefined) {
    contents.UserMetadata = deserializeAws_restXmlUserMetadataSingle(output["UserMetadata"], context);
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlTagMultiInOrMode(output["And"], context);
  }
  return contents;
};

const deserializeAws_restXmlOwner = (output: any, context: __SerdeContext): Owner => {
  let contents: any = {
    DisplayName: undefined,
    ID: undefined,
  };
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControls = (output: any, context: __SerdeContext): OwnershipControls => {
  let contents: any = {
    Rules: undefined,
  };
  if (output.Rule === "") {
    contents.Rules = [];
  }
  if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlOwnershipControlsRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControlsRule = (output: any, context: __SerdeContext): OwnershipControlsRule => {
  let contents: any = {
    ObjectOwnership: undefined,
  };
  if (output["ObjectOwnership"] !== undefined) {
    contents.ObjectOwnership = output["ObjectOwnership"];
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControlsRules = (
  output: any,
  context: __SerdeContext
): OwnershipControlsRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlOwnershipControlsRule(entry, context);
    });
};

const deserializeAws_restXmlPart = (output: any, context: __SerdeContext): Part => {
  let contents: any = {
    PartNumber: undefined,
    LastModified: undefined,
    ETag: undefined,
    Size: undefined,
  };
  if (output["PartNumber"] !== undefined) {
    contents.PartNumber = parseInt(output["PartNumber"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  return contents;
};

const deserializeAws_restXmlParts = (output: any, context: __SerdeContext): Part[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlPart(entry, context);
    });
};

const deserializeAws_restXmlPolicyConfiguration = (output: any, context: __SerdeContext): PolicyConfiguration => {
  let contents: any = {
    Status: undefined,
    PolicyMode: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["PolicyMode"] !== undefined) {
    contents.PolicyMode = output["PolicyMode"];
  }
  return contents;
};

const deserializeAws_restXmlPolicySourceGroup = (output: any, context: __SerdeContext): PolicySourceGroup => {
  let contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_restXmlPolicyStatus = (output: any, context: __SerdeContext): PolicyStatus => {
  let contents: any = {
    IsPublic: undefined,
  };
  if (output["IsPublic"] !== undefined) {
    contents.IsPublic = output["IsPublic"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlPrefixOrSuffix = (output: any, context: __SerdeContext): PrefixOrSuffix => {
  let contents: any = {
    Value: undefined,
  };
  if (output.Value === "") {
    contents.Value = [];
  }
  if (output["Value"] !== undefined) {
    contents.Value = deserializeAws_restXmlPrefixOrSuffixValue(__getArrayIfSingleItem(output["Value"]), context);
  }
  return contents;
};

const deserializeAws_restXmlPrefixOrSuffixValue = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlPublicAccessBlockConfiguration = (
  output: any,
  context: __SerdeContext
): PublicAccessBlockConfiguration => {
  let contents: any = {
    BlockPublicAcls: undefined,
    IgnorePublicAcls: undefined,
    BlockPublicPolicy: undefined,
    RestrictPublicBuckets: undefined,
  };
  if (output["BlockPublicAcls"] !== undefined) {
    contents.BlockPublicAcls = output["BlockPublicAcls"] == "true";
  }
  if (output["IgnorePublicAcls"] !== undefined) {
    contents.IgnorePublicAcls = output["IgnorePublicAcls"] == "true";
  }
  if (output["BlockPublicPolicy"] !== undefined) {
    contents.BlockPublicPolicy = output["BlockPublicPolicy"] == "true";
  }
  if (output["RestrictPublicBuckets"] !== undefined) {
    contents.RestrictPublicBuckets = output["RestrictPublicBuckets"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlQoSConfiguration = (output: any, context: __SerdeContext): QoSConfiguration => {
  let contents: any = {
    ReadOps: undefined,
    WriteOps: undefined,
    ReadBandwidth: undefined,
    WriteBandwidth: undefined,
    TotalOps: undefined,
    DeleteOps: undefined,
    ListOps: undefined,
    Status: undefined,
  };
  if (output["ReadOps"] !== undefined) {
    contents.ReadOps = parseInt(output["ReadOps"]);
  }
  if (output["WriteOps"] !== undefined) {
    contents.WriteOps = parseInt(output["WriteOps"]);
  }
  if (output["ReadBandwidth"] !== undefined) {
    contents.ReadBandwidth = parseInt(output["ReadBandwidth"]);
  }
  if (output["WriteBandwidth"] !== undefined) {
    contents.WriteBandwidth = parseInt(output["WriteBandwidth"]);
  }
  if (output["TotalOps"] !== undefined) {
    contents.TotalOps = parseInt(output["TotalOps"]);
  }
  if (output["DeleteOps"] !== undefined) {
    contents.DeleteOps = parseInt(output["DeleteOps"]);
  }
  if (output["ListOps"] !== undefined) {
    contents.ListOps = parseInt(output["ListOps"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlQueueConfiguration = (output: any, context: __SerdeContext): QueueConfiguration => {
  let contents: any = {
    Id: undefined,
    QueueArn: undefined,
    Events: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Queue"] !== undefined) {
    contents.QueueArn = output["Queue"];
  }
  if (output.Event === "") {
    contents.Events = [];
  }
  if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlQueueConfigurationList = (output: any, context: __SerdeContext): QueueConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlQueueConfiguration(entry, context);
    });
};

const deserializeAws_restXmlQuota = (output: any, context: __SerdeContext): Quota => {
  let contents: any = {
    StorageQuota: undefined,
    ObjectQuota: undefined,
    OverQuotaDelete: undefined,
  };
  if (output["StorageQuota"] !== undefined) {
    contents.StorageQuota = output["StorageQuota"];
  }
  if (output["ObjectQuota"] !== undefined) {
    contents.ObjectQuota = output["ObjectQuota"];
  }
  if (output["OverQuotaDelete"] !== undefined) {
    contents.OverQuotaDelete = output["OverQuotaDelete"];
  }
  return contents;
};

const deserializeAws_restXmlRedirect = (output: any, context: __SerdeContext): Redirect => {
  let contents: any = {
    HostName: undefined,
    HttpRedirectCode: undefined,
    Protocol: undefined,
    ReplaceKeyPrefixWith: undefined,
    ReplaceKeyWith: undefined,
  };
  if (output["HostName"] !== undefined) {
    contents.HostName = output["HostName"];
  }
  if (output["HttpRedirectCode"] !== undefined) {
    contents.HttpRedirectCode = output["HttpRedirectCode"];
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  if (output["ReplaceKeyPrefixWith"] !== undefined) {
    contents.ReplaceKeyPrefixWith = output["ReplaceKeyPrefixWith"];
  }
  if (output["ReplaceKeyWith"] !== undefined) {
    contents.ReplaceKeyWith = output["ReplaceKeyWith"];
  }
  return contents;
};

const deserializeAws_restXmlRedirectAllRequestsTo = (output: any, context: __SerdeContext): RedirectAllRequestsTo => {
  let contents: any = {
    HostName: undefined,
    Protocol: undefined,
  };
  if (output["HostName"] !== undefined) {
    contents.HostName = output["HostName"];
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  return contents;
};

const deserializeAws_restXmlRefererConfiguration = (output: any, context: __SerdeContext): RefererConfiguration => {
  let contents: any = {
    AllowEmptyReferer: undefined,
    RefererList: undefined,
    Status: undefined,
  };
  if (output["AllowEmptyReferer"] !== undefined) {
    contents.AllowEmptyReferer = output["AllowEmptyReferer"] == "true";
  }
  if (output["RefererList"] !== undefined) {
    contents.RefererList = deserializeAws_restXmlRefererList(output["RefererList"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlRefererList = (output: any, context: __SerdeContext): RefererList => {
  let contents: any = {
    BlackList: undefined,
    WhiteList: undefined,
  };
  if (output.BlackList === "") {
    contents.BlackList = [];
  }
  if (output["BlackList"] !== undefined && output["BlackList"]["Referer"] !== undefined) {
    contents.BlackList = deserializeAws_restXmlBlackList(
      __getArrayIfSingleItem(output["BlackList"]["Referer"]),
      context
    );
  }
  if (output.WhiteList === "") {
    contents.WhiteList = [];
  }
  if (output["WhiteList"] !== undefined && output["WhiteList"]["Referer"] !== undefined) {
    contents.WhiteList = deserializeAws_restXmlWhiteList(
      __getArrayIfSingleItem(output["WhiteList"]["Referer"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlReplicaModifications = (output: any, context: __SerdeContext): ReplicaModifications => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ReplicationConfiguration => {
  let contents: any = {
    Role: undefined,
    Rules: undefined,
  };
  if (output["Role"] !== undefined) {
    contents.Role = output["Role"];
  }
  if (output.Rule === "") {
    contents.Rules = [];
  }
  if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlReplicationRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  let contents: any = {
    ID: undefined,
    Priority: undefined,
    Prefix: undefined,
    Filter: undefined,
    Status: undefined,
    SourceSelectionCriteria: undefined,
    ExistingObjectReplication: undefined,
    Destination: undefined,
    DeleteMarkerReplication: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlReplicationRuleFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["SourceSelectionCriteria"] !== undefined) {
    contents.SourceSelectionCriteria = deserializeAws_restXmlSourceSelectionCriteria(
      output["SourceSelectionCriteria"],
      context
    );
  }
  if (output["ExistingObjectReplication"] !== undefined) {
    contents.ExistingObjectReplication = deserializeAws_restXmlExistingObjectReplication(
      output["ExistingObjectReplication"],
      context
    );
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlDestination(output["Destination"], context);
  }
  if (output["DeleteMarkerReplication"] !== undefined) {
    contents.DeleteMarkerReplication = deserializeAws_restXmlDeleteMarkerReplication(
      output["DeleteMarkerReplication"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlReplicationRuleAndOperator = (
  output: any,
  context: __SerdeContext
): ReplicationRuleAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationRuleFilter = (output: any, context: __SerdeContext): ReplicationRuleFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: output["Prefix"],
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlReplicationRuleAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlReplicationRules = (output: any, context: __SerdeContext): ReplicationRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlReplicationRule(entry, context);
    });
};

const deserializeAws_restXmlReplicationTime = (output: any, context: __SerdeContext): ReplicationTime => {
  let contents: any = {
    Status: undefined,
    Time: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["Time"] !== undefined) {
    contents.Time = deserializeAws_restXmlReplicationTimeValue(output["Time"], context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationTimeValue = (output: any, context: __SerdeContext): ReplicationTimeValue => {
  let contents: any = {
    Minutes: undefined,
  };
  if (output["Minutes"] !== undefined) {
    contents.Minutes = parseInt(output["Minutes"]);
  }
  return contents;
};

const deserializeAws_restXmlRepPairConfiguration = (output: any, context: __SerdeContext): RepPairConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlRestoreExpiration = (output: any, context: __SerdeContext): RestoreExpiration => {
  let contents: any = {
    DeleteRestoreObject: undefined,
  };
  if (output["DeleteRestoreObject"] !== undefined) {
    contents.DeleteRestoreObject = output["DeleteRestoreObject"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlRoutingRule = (output: any, context: __SerdeContext): RoutingRule => {
  let contents: any = {
    Condition: undefined,
    Redirect: undefined,
  };
  if (output["Condition"] !== undefined) {
    contents.Condition = deserializeAws_restXmlCondition(output["Condition"], context);
  }
  if (output["Redirect"] !== undefined) {
    contents.Redirect = deserializeAws_restXmlRedirect(output["Redirect"], context);
  }
  return contents;
};

const deserializeAws_restXmlRoutingRules = (output: any, context: __SerdeContext): RoutingRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlRoutingRule(entry, context);
    });
};

const deserializeAws_restXmlS3KeyFilter = (output: any, context: __SerdeContext): S3KeyFilter => {
  let contents: any = {
    FilterRules: undefined,
  };
  if (output.FilterRule === "") {
    contents.FilterRules = [];
  }
  if (output["FilterRule"] !== undefined) {
    contents.FilterRules = deserializeAws_restXmlFilterRuleList(__getArrayIfSingleItem(output["FilterRule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionByDefault = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionByDefault => {
  let contents: any = {
    SSEAlgorithm: undefined,
    KMSMasterKeyID: undefined,
  };
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = output["SSEAlgorithm"];
  }
  if (output["KMSMasterKeyID"] !== undefined) {
    contents.KMSMasterKeyID = output["KMSMasterKeyID"];
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  let contents: any = {
    Rules: undefined,
    Algothrim: undefined,
    Status: undefined,
    ServerSideEncryptionAlgorithm: undefined,
  };
  if (output.Rule === "") {
    contents.Rules = [];
  }
  if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlServerSideEncryptionRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  if (output["Algothrim"] !== undefined) {
    contents.Algothrim = output["Algothrim"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["ServerSideEncryptionAlgorithm"] !== undefined) {
    contents.ServerSideEncryptionAlgorithm = output["ServerSideEncryptionAlgorithm"];
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionRule = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionRule => {
  let contents: any = {
    ApplyServerSideEncryptionByDefault: undefined,
    BucketKeyEnabled: undefined,
  };
  if (output["ApplyServerSideEncryptionByDefault"] !== undefined) {
    contents.ApplyServerSideEncryptionByDefault = deserializeAws_restXmlServerSideEncryptionByDefault(
      output["ApplyServerSideEncryptionByDefault"],
      context
    );
  }
  if (output["BucketKeyEnabled"] !== undefined) {
    contents.BucketKeyEnabled = output["BucketKeyEnabled"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionRules = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlServerSideEncryptionRule(entry, context);
    });
};

const deserializeAws_restXmlSnapshot = (output: any, context: __SerdeContext): Snapshot => {
  let contents: any = {
    ID: undefined,
    Type: undefined,
    Name: undefined,
    Description: undefined,
    CreateDate: undefined,
    CreateTime: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = new Date(output["CreateTime"]);
  }
  return contents;
};

const deserializeAws_restXmlSnapshotIdentifier = (output: any, context: __SerdeContext): SnapshotIdentifier => {
  let contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_restXmlSnapshotIdentifierList = (output: any, context: __SerdeContext): SnapshotIdentifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlSnapshotIdentifier(entry, context);
    });
};

const deserializeAws_restXmlSnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlSnapshot(entry, context);
    });
};

const deserializeAws_restXmlSnapshotPolicy = (output: any, context: __SerdeContext): SnapshotPolicy => {
  let contents: any = {
    Type: undefined,
    SnapshotPrefix: undefined,
    CreatePeriod: undefined,
    SnapshotReservedNum: undefined,
    EnableSpacePolicy: undefined,
    Description: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["SnapshotPrefix"] !== undefined) {
    contents.SnapshotPrefix = output["SnapshotPrefix"];
  }
  if (output["CreatePeriod"] !== undefined) {
    contents.CreatePeriod = deserializeAws_restXmlSnapshotPolicyPeriod(output["CreatePeriod"], context);
  }
  if (output["SnapshotReservedNum"] !== undefined) {
    contents.SnapshotReservedNum = parseInt(output["SnapshotReservedNum"]);
  }
  if (output["EnableSpacePolicy"] !== undefined) {
    contents.EnableSpacePolicy = output["EnableSpacePolicy"] == "true";
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  return contents;
};

const deserializeAws_restXmlSnapshotPolicyPeriod = (output: any, context: __SerdeContext): SnapshotPolicyPeriod => {
  let contents: any = {
    Day: undefined,
    Hour: undefined,
  };
  if (output["Day"] !== undefined) {
    contents.Day = parseInt(output["Day"]);
  }
  if (output["Hour"] !== undefined) {
    contents.Hour = parseInt(output["Hour"]);
  }
  return contents;
};

const deserializeAws_restXmlSourceSelectionCriteria = (
  output: any,
  context: __SerdeContext
): SourceSelectionCriteria => {
  let contents: any = {
    SseKmsEncryptedObjects: undefined,
    ReplicaModifications: undefined,
  };
  if (output["SseKmsEncryptedObjects"] !== undefined) {
    contents.SseKmsEncryptedObjects = deserializeAws_restXmlSseKmsEncryptedObjects(
      output["SseKmsEncryptedObjects"],
      context
    );
  }
  if (output["ReplicaModifications"] !== undefined) {
    contents.ReplicaModifications = deserializeAws_restXmlReplicaModifications(output["ReplicaModifications"], context);
  }
  return contents;
};

const deserializeAws_restXmlSSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  let contents: any = {
    KeyId: undefined,
  };
  if (output["KeyId"] !== undefined) {
    contents.KeyId = output["KeyId"];
  }
  return contents;
};

const deserializeAws_restXmlSseKmsEncryptedObjects = (output: any, context: __SerdeContext): SseKmsEncryptedObjects => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlSSES3 = (output: any, context: __SerdeContext): SSES3 => {
  let contents: any = {};
  return contents;
};

const deserializeAws_restXmlStat = (output: any, context: __SerdeContext): Stat => {
  let contents: any = {
    Region: undefined,
    Num: undefined,
    Size: undefined,
    DedupNum: undefined,
    DedupSize: undefined,
    Redundancy: undefined,
  };
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["Num"] !== undefined) {
    contents.Num = parseInt(output["Num"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["DedupNum"] !== undefined) {
    contents.DedupNum = parseInt(output["DedupNum"]);
  }
  if (output["DedupSize"] !== undefined) {
    contents.DedupSize = parseInt(output["DedupSize"]);
  }
  if (output["Redundancy"] !== undefined) {
    contents.Redundancy = output["Redundancy"];
  }
  return contents;
};

const deserializeAws_restXmlStatisticConfiguration = (output: any, context: __SerdeContext): StatisticConfiguration => {
  let contents: any = {
    DomainNameList: undefined,
    StorageClass: undefined,
    TransferBucketName: undefined,
    RestoreEXBucketName: undefined,
    Status: undefined,
  };
  if (output.DomainNameList === "") {
    contents.DomainNameList = [];
  }
  if (output["DomainNameList"] !== undefined) {
    contents.DomainNameList = deserializeAws_restXmlDomainNameList(
      __getArrayIfSingleItem(output["DomainNameList"]),
      context
    );
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["TransferBucketName"] !== undefined) {
    contents.TransferBucketName = deserializeAws_restXmlTransferOrRestoreBucketName(
      output["TransferBucketName"],
      context
    );
  }
  if (output["RestoreEXBucketName"] !== undefined) {
    contents.RestoreEXBucketName = deserializeAws_restXmlTransferOrRestoreBucketName(
      output["RestoreEXBucketName"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlStorageClassAnalysis = (output: any, context: __SerdeContext): StorageClassAnalysis => {
  let contents: any = {
    DataExport: undefined,
  };
  if (output["DataExport"] !== undefined) {
    contents.DataExport = deserializeAws_restXmlStorageClassAnalysisDataExport(output["DataExport"], context);
  }
  return contents;
};

const deserializeAws_restXmlStorageClassAnalysisDataExport = (
  output: any,
  context: __SerdeContext
): StorageClassAnalysisDataExport => {
  let contents: any = {
    OutputSchemaVersion: undefined,
    Destination: undefined,
  };
  if (output["OutputSchemaVersion"] !== undefined) {
    contents.OutputSchemaVersion = output["OutputSchemaVersion"];
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlAnalyticsExportDestination(output["Destination"], context);
  }
  return contents;
};

const deserializeAws_restXmlStorageClassStatistics = (
  output: any,
  context: __SerdeContext
): StorageClassStatisticsList[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlStorageClassStatisticsList(entry, context);
    });
};

const deserializeAws_restXmlStorageClassStatisticsList = (
  output: any,
  context: __SerdeContext
): StorageClassStatisticsList => {
  let contents: any = {
    StorageClass: undefined,
    ObjectNumber: undefined,
    ObjectSize: undefined,
  };
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["ObjectNumber"] !== undefined) {
    contents.ObjectNumber = output["ObjectNumber"];
  }
  if (output["ObjectSize"] !== undefined) {
    contents.ObjectSize = output["ObjectSize"];
  }
  return contents;
};

const deserializeAws_restXmlStringTypeListAgentDirectoryResult = (
  output: any,
  context: __SerdeContext
): StringTypeListAgentDirectoryResult => {
  let contents: any = {
    MaxKeys: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    NextMarker: undefined,
    Directory: undefined,
  };
  if (output["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(output["MaxKeys"]);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output.Directory === "") {
    contents.Directory = [];
  }
  if (output["Directory"] !== undefined) {
    contents.Directory = deserializeAws_restXmlDirectoryList(__getArrayIfSingleItem(output["Directory"]), context);
  }
  return contents;
};

const deserializeAws_restXmlTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_restXmlTaggingConfiguration = (output: any, context: __SerdeContext): TaggingConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlTagMultiInOrMode = (output: any, context: __SerdeContext): TagMultiInOrMode => {
  let contents: any = {
    Tags: undefined,
  };
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlTagSet = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTag(entry, context);
    });
};

const deserializeAws_restXmlTargetGrant = (output: any, context: __SerdeContext): TargetGrant => {
  let contents: any = {
    Grantee: undefined,
    Permission: undefined,
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = output["Permission"];
  }
  return contents;
};

const deserializeAws_restXmlTargetGrants = (output: any, context: __SerdeContext): TargetGrant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTargetGrant(entry, context);
    });
};

const deserializeAws_restXmlTiering = (output: any, context: __SerdeContext): Tiering => {
  let contents: any = {
    Days: undefined,
    AccessTier: undefined,
  };
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["AccessTier"] !== undefined) {
    contents.AccessTier = output["AccessTier"];
  }
  return contents;
};

const deserializeAws_restXmlTieringList = (output: any, context: __SerdeContext): Tiering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTiering(entry, context);
    });
};

const deserializeAws_restXmlTopicConfiguration = (output: any, context: __SerdeContext): TopicConfiguration => {
  let contents: any = {
    Id: undefined,
    TopicArn: undefined,
    Events: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Topic"] !== undefined) {
    contents.TopicArn = output["Topic"];
  }
  if (output.Event === "") {
    contents.Events = [];
  }
  if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlTopicConfigurationList = (output: any, context: __SerdeContext): TopicConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTopicConfiguration(entry, context);
    });
};

const deserializeAws_restXmlTransferOrRestoreBucketName = (
  output: any,
  context: __SerdeContext
): TransferOrRestoreBucketName => {
  let contents: any = {
    StandardBucketName: undefined,
    StandardIABucketName: undefined,
    GlacierBucketName: undefined,
  };
  if (output["StandardBucketName"] !== undefined) {
    contents.StandardBucketName = output["StandardBucketName"];
  }
  if (output["StandardIABucketName"] !== undefined) {
    contents.StandardIABucketName = output["StandardIABucketName"];
  }
  if (output["GlacierBucketName"] !== undefined) {
    contents.GlacierBucketName = output["GlacierBucketName"];
  }
  return contents;
};

const deserializeAws_restXmlTransition = (output: any, context: __SerdeContext): Transition => {
  let contents: any = {
    Date: undefined,
    Days: undefined,
    Minutes: undefined,
    Hours: undefined,
    StorageClass: undefined,
    GlacierConfiguration: undefined,
  };
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Minutes"] !== undefined) {
    contents.Minutes = parseInt(output["Minutes"]);
  }
  if (output["Hours"] !== undefined) {
    contents.Hours = parseInt(output["Hours"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["GlacierConfiguration"] !== undefined) {
    contents.GlacierConfiguration = output["GlacierConfiguration"];
  }
  return contents;
};

const deserializeAws_restXmlTransitionList = (output: any, context: __SerdeContext): Transition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTransition(entry, context);
    });
};

const deserializeAws_restXmlTrash = (output: any, context: __SerdeContext): Trash => {
  let contents: any = {
    Status: undefined,
    Mode: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = deserializeAws_restXmlMode(output["Mode"], context);
  }
  return contents;
};

const deserializeAws_restXmlTrashConfiguration = (output: any, context: __SerdeContext): TrashConfiguration => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlUserMetadataSingle = (output: any, context: __SerdeContext): UserMetadataSingle => {
  let contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_restXmlVersioningConfiguration = (
  output: any,
  context: __SerdeContext
): VersioningConfiguration => {
  let contents: any = {
    MFADelete: undefined,
    Status: undefined,
  };
  if (output["MfaDelete"] !== undefined) {
    contents.MFADelete = output["MfaDelete"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlWhiteList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restXmlWORM = (output: any, context: __SerdeContext): WORM => {
  let contents: any = {
    GraceUntilDate: undefined,
    RetainUntilDate: undefined,
  };
  if (output["GraceUntilDate"] !== undefined) {
    contents.GraceUntilDate = new Date(output["GraceUntilDate"]);
  }
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
  }
  return contents;
};

const deserializeAws_restXmlWORMConfiguration = (output: any, context: __SerdeContext): WORMConfiguration => {
  let contents: any = {
    WORMEnabled: undefined,
    Rule: undefined,
  };
  if (output["WORMEnabled"] !== undefined) {
    contents.WORMEnabled = output["WORMEnabled"];
  }
  if (output["Rule"] !== undefined) {
    contents.Rule = deserializeAws_restXmlWORMRule(output["Rule"], context);
  }
  return contents;
};

const deserializeAws_restXmlWORMDefaultRetention = (output: any, context: __SerdeContext): WORMDefaultRetention => {
  let contents: any = {
    Days: undefined,
    Years: undefined,
    Months: undefined,
    Hours: undefined,
    Minutes: undefined,
  };
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Years"] !== undefined) {
    contents.Years = parseInt(output["Years"]);
  }
  if (output["Months"] !== undefined) {
    contents.Months = parseInt(output["Months"]);
  }
  if (output["Hours"] !== undefined) {
    contents.Hours = parseInt(output["Hours"]);
  }
  if (output["Minutes"] !== undefined) {
    contents.Minutes = parseInt(output["Minutes"]);
  }
  return contents;
};

const deserializeAws_restXmlWORMRetainPeriod = (output: any, context: __SerdeContext): WORMRetainPeriod => {
  let contents: any = {
    RetainUntilDate: undefined,
  };
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
  }
  return contents;
};

const deserializeAws_restXmlWORMRule = (output: any, context: __SerdeContext): WORMRule => {
  let contents: any = {
    DefaultRetention: undefined,
    DefaultGracePeriod: undefined,
  };
  if (output["DefaultRetention"] !== undefined) {
    contents.DefaultRetention = deserializeAws_restXmlWORMDefaultRetention(output["DefaultRetention"], context);
  }
  if (output["DefaultGracePeriod"] !== undefined) {
    contents.DefaultGracePeriod = deserializeAws_restXmlWORMDefaultRetention(output["DefaultGracePeriod"], context);
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Code !== undefined) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
