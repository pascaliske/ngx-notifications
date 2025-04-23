import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics'
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks'
import { NodeDependency, NodeDependencyType, addPackageJsonDependency } from 'schematics-utilities'

function addPackageJsonDependencies(): Rule {
    return (host: Tree) => {
        const { version = 'latest' } = require('../../package.json')
        const dependencies: NodeDependency[] = [
            {
                type: NodeDependencyType.Default,
                name: '@pascaliske/ngx-notifications',
                version: `^${version}`,
            },
        ]

        dependencies.forEach(dep => addPackageJsonDependency(host, dep))

        return host
    }
}

function installPackageJsonDependencies(): Rule {
    return (host: Tree, context: SchematicContext) => {
        context.addTask(new NodePackageInstallTask())

        return host
    }
}

/**
 * Adds the library to an existing angular project.
 */
export default function (): Rule {
    return chain([addPackageJsonDependencies(), installPackageJsonDependencies()])
}
