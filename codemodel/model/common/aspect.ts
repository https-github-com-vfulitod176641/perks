import { ApiVersions } from './api-version';
import { Deprecation } from './deprecation';
import { ExternalDocumentation } from './external-documentation';
import { Metadata } from './metadata';
import { Initializer, DeepPartial } from '@azure-tools/codegen';

/** the base interface that represents an aspect of the model. */
export interface Aspect extends Metadata {
  /** a unique id for correlation between cloned objects */
  /** @internal */ uid: string;

  /** common name of the aspect -- in OAI3 this was typically the key in the parent dictionary */
  $key: string;

  /** description of the aspect. */
  description: string;

  /** a short description
   *
   * @note - this should not be the description over again.
   */
  summary?: string;

  /** API versions that this applies to. Undefined means all versions */
  apiVersions?: ApiVersions;

  /** deprecation information -- ie, when this aspect doesn't apply and why */
  deprecated?: Deprecation;

  /** External Documentation Links */
  externalDocs?: ExternalDocumentation;
}

export class Aspect extends Metadata implements Aspect {
  constructor(public $key: string, public description: string, initializer?: DeepPartial<Aspect>) {
    super();

    this.apply({
      language: {
        default: {
          name: $key,
          description,
        }
      },
      protocol: {
      }
    }, initializer);
  }
}