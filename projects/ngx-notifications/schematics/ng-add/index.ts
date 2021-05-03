import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics'
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks'
import {
    NodeDependency,
    NodeDependencyType,
    addPackageJsonDependency,
    getWorkspace,
    getProjectFromWorkspace,
    addModuleImportToRootModule,
    WorkspaceProject,
    ProjectType,
} from 'schematics-utilities'

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

function addModuleToImports(): Rule {
    return (host: Tree) => {
        const moduleName = 'NotificationsModule'
        const workspace = getWorkspace(host)
        const project = getProjectFromWorkspace(workspace, Object.keys(workspace['projects'])[0])

        addModuleImportToRootModule(
            host,
            moduleName,
            '@pascaliske/ngx-notifications',
            project as WorkspaceProject<ProjectType.Application>,
        )

        return host
    }
}

/**
 * Adds the library to an existing angular project.
 */
export default function (): Rule {
    return chain([
        addPackageJsonDependencies(),
        installPackageJsonDependencies(),
        addModuleToImports(),
    ])
}
