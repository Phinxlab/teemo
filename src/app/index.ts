import { ChinoApp, ChinoBucket, ChinoEvent, Config, ChinoAutoLoaderBucket } from '@phinxlab/chino-sdk';

export class TeemoApp implements ChinoApp {
  event(event: ChinoEvent, name: string, data: any): void {}

  getBuckets(): ChinoBucket[] {
    const exampleBucket = ChinoAutoLoaderBucket.create(Config.fromBBD('generated/endpoints'));
    return [exampleBucket];
  }

  configureTraverses(): void {}
  configureValidators(): void {}
}
