import {
    List,
    Map,
    Structure,
} from "./Components/Model";
import {TreeModel} from "@aws/service-model";

export class ModelGenerator {
    constructor(private readonly model: TreeModel) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {shapes} = this.model;
        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'list') {
                yield [
                    shapeName,
                    new List(shape).toString(),
                ];
            } else if (shape.type === 'map') {
                yield [
                    shapeName,
                    new Map(shape).toString(),
                ];
            } else if (shape.type === 'structure') {
                yield [
                    shapeName,
                    new Structure(shape).toString(),
                ];
            }
        }
    }
}