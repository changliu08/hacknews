let userSidebarDataSource = [
    {key: "inbox", text: "待办任务", type: "inbox", spriteCssClass: "", path: "/tasks?status=pending"},
    {key: "assign", text: "待签任务", type: "assign", spriteCssClass: "", path: "/tasks?status=candidate"},
    {key: "delegation", text: "代理任务", type: "delegation", spriteCssClass: "", path: "/tasks?status=delegate"},
    {key: "task_history", text: "任务历史", type: "task_history", spriteCssClass: "", path: "/tasks/history"},
    {key: "start_workflow", text: "发起流程", type: "start_workflow", spriteCssClass: "", path: "/process_definitions"},
    {key: "my_process", text: "我的流程", type: "my_process", spriteCssClass: "", path: "/process_instances"}
]

let pendingTaskDataSource = [
    {
        "id": "e3036f4c-7cb5-11eb-91bb-0242ac110002",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-03-03T22:50:20.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "e2ff2a5f-7cb5-11eb-91bb-0242ac110002",
        "processInstanceName": "WF47202103040018",
        "processDefinitionId": "MODEL42:2:0364344d-5c80-11eb-b459-0242ac110002",
        "processDefinitionName": "合約流程(PM會審)",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF47",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "__WF47202103040018",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF47:1:61e478d1-5bc5-11eb-a50a-0242ac110002",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "f8aacb3d-4100-11eb-aca2-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T23:16:39.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "f8a94464-4100-11eb-aca2-0242ac110003",
        "processInstanceName": "WF32202012180012",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "3f8d4546-fc09-11eb-b306-0242ac110004",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-08-13T07:37:01.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "3f8c5abc-fc09-11eb-b306-0242ac110004",
        "processInstanceName": "DEMO202108130023",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 6,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:6:3fe8732a-bde9-11eb-96a7-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "ef930e27-fc05-11eb-b306-0242ac110004",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-08-13T07:13:18.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "ef92239d-fc05-11eb-b306-0242ac110004",
        "processInstanceName": "DEMO202108130022",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 6,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:6:3fe8732a-bde9-11eb-96a7-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "1aa125d5-019b-11ec-8d04-0242ac110002",
        "name": "step2",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-08-20T09:43:41.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "f8e03fda-019a-11ec-8d04-0242ac110002",
        "processInstanceName": "DEMO202108200002",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 6,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-53C2300F-3E46-4F72-933A-9860BAFFF51A",
        "processDeployedDefinitionId": "demo:6:3fe8732a-bde9-11eb-96a7-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "b18712c9-0acf-11ec-89f8-0242ac110002",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-01T02:52:49.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "b1831afc-0acf-11ec-89f8-0242ac110002",
        "processInstanceName": "DEMO202109010003",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 6,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:6:3fe8732a-bde9-11eb-96a7-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "b654527c-0acf-11ec-89f8-0242ac110002",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-01T02:52:57.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "b652085f-0acf-11ec-89f8-0242ac110002",
        "processInstanceName": "DEMO202109010004",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 6,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:6:3fe8732a-bde9-11eb-96a7-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "bbaa974f-0acf-11ec-89f8-0242ac110002",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-01T02:53:06.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "bba91182-0acf-11ec-89f8-0242ac110002",
        "processInstanceName": "DEMO202109010005",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 6,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:6:3fe8732a-bde9-11eb-96a7-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "d2af471c-0aea-11ec-89f8-0242ac110002",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-01T06:07:01.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "d2ae3582-0aea-11ec-89f8-0242ac110002",
        "processInstanceName": "DEMO202109010007",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 7,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:7:54af0216-0ad5-11ec-89f8-0242ac110002",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "d7072fbc-0aea-11ec-89f8-0242ac110002",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-01T06:07:08.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "d7064532-0aea-11ec-89f8-0242ac110002",
        "processInstanceName": "DEMO202109010008",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 7,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:7:54af0216-0ad5-11ec-89f8-0242ac110002",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "029c281d-abb5-11ea-b03f-00163e067025",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-06-11T07:27:30.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "0298cca2-abb5-11ea-b03f-00163e067025",
        "processInstanceName": "DEMO202006110006",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 4,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process at 2020-06-11 15:27",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:4:449d7c2f-904b-11ea-99ba-00163e067025",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "09c9fe42-427d-11eb-82c1-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-19T20:37:16.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "09c961c9-427d-11eb-82c1-0242ac110003",
        "processInstanceName": "WF32202012200024",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "1690726b-4101-11eb-aca2-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T23:17:29.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "168f39b2-4101-11eb-aca2-0242ac110003",
        "processInstanceName": "WF32202012180013",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "2c714c7f-4100-11eb-aca2-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T23:10:56.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "2c6fecb6-4100-11eb-aca2-0242ac110003",
        "processInstanceName": "WF32202012180011",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "33d4bf49-406f-11eb-8719-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T05:53:12.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "33d35f80-406f-11eb-8719-0242ac110003",
        "processInstanceName": "WF32202012170006",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "39d5782c-b12c-11ea-b03f-00163e067025",
        "name": "step1",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-06-18T06:23:29.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "39d502e1-b12c-11ea-b03f-00163e067025",
        "processInstanceName": "DEMO202006180007",
        "processDefinitionId": "demomodel:1:34154ea8-904b-11ea-99ba-00163e067025",
        "processDefinitionName": "demo",
        "processDefinitionDescription": null,
        "processDefinitionKey": "demo",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 4,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process at 2020-06-18 14:23",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "demo:4:449d7c2f-904b-11ea-99ba-00163e067025",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "8d569045-406f-11eb-8719-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T05:55:42.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "8d52986c-406f-11eb-8719-0242ac110003",
        "processInstanceName": "WF32202012170008",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "99cd88d3-40ee-11eb-8719-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T21:05:09.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "99cc501a-40ee-11eb-8719-0242ac110003",
        "processInstanceName": "WF32202012180009",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "722a4fb0-427e-11eb-82c1-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-19T20:47:21.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "7229b337-427e-11eb-82c1-0242ac110003",
        "processInstanceName": "WF32202012200025",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "43845249-4101-11eb-aca2-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T23:18:44.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "438367b0-4101-11eb-aca2-0242ac110003",
        "processInstanceName": "WF32202012180014",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "4765bf37-406f-11eb-8719-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T05:53:44.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "4764877e-406f-11eb-8719-0242ac110003",
        "processInstanceName": "WF32202012170007",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "492ec4b1-40fc-11eb-aca2-0242ac110003",
        "name": "業務制件合約 / 客戶提供銷售合約",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2020-12-17T22:43:06.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "492a57a8-40fc-11eb-aca2-0242ac110003",
        "processInstanceName": "WF32202012180010",
        "processDefinitionId": "MODEL27:1:80fad481-3f8e-11eb-85e0-0242ac110002",
        "processDefinitionName": "合約審核流程",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF32",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 1,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "step1",
        "processDeployedDefinitionId": "WF32:1:e904b9b9-4059-11eb-8b0c-0242ac110003",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "ebaa2de5-11ee-11ec-bd7d-0242ac110002",
        "name": "candidate",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-10T04:23:59.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "eba9b991-11ee-11ec-bd7d-0242ac110002",
        "processInstanceName": "WF7707202109100006",
        "processDefinitionId": "MODEL7706:1:c6e375c6-111a-11ec-a921-0242ac110002",
        "processDefinitionName": "demo-1",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF7707",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 3,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "WF7707:3:1d41bb7a-1122-11ec-bd7d-0242ac110002",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "b9970231-11ef-11ec-bd7d-0242ac110002",
        "name": "candidate",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-10T04:29:45.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "b99665cd-11ef-11ec-bd7d-0242ac110002",
        "processInstanceName": "WF7707202109100007",
        "processDefinitionId": "MODEL7706:1:c6e375c6-111a-11ec-a921-0242ac110002",
        "processDefinitionName": "demo-1",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF7707",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 3,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "WF7707:3:1d41bb7a-1122-11ec-bd7d-0242ac110002",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    },
    {
        "id": "ce7b45c0-120e-11ec-bd7d-0242ac110002",
        "name": "candidate",
        "description": null,
        "category": null,
        "assignee": {
            "id": "admin",
            "firstName": "",
            "lastName": "",
            "email": "StellaYe@active.com.hk",
            "fullName": "admin",
            "groups": [],
            "privileges": []
        },
        "created": "2021-09-10T08:12:14.000+0000",
        "dueDate": null,
        "endDate": null,
        "duration": null,
        "priority": 50,
        "processInstanceId": "ce7ad06c-120e-11ec-bd7d-0242ac110002",
        "processInstanceName": "WF7707202109100008",
        "processDefinitionId": "MODEL7706:1:c6e375c6-111a-11ec-a921-0242ac110002",
        "processDefinitionName": "demo-1",
        "processDefinitionDescription": null,
        "processDefinitionKey": "WF7707",
        "processDefinitionCategory": null,
        "processDefinitionVersion": 3,
        "processDefinitionDeploymentId": null,
        "formKey": null,
        "processInstanceStartUserId": "admin",
        "processInstanceDescription": "admin created this process.",
        "initiatorCanCompleteTask": false,
        "durationFormat": "",
        "delegationState": null,
        "owner": null,
        "tenantId": "1303174917",
        "taskDefinitionKey": "sid-2AAE53FA-7ACE-4743-9E6A-4F598E718724",
        "processDeployedDefinitionId": "WF7707:3:1d41bb7a-1122-11ec-bd7d-0242ac110002",
        "memberOfCandidateGroup": false,
        "memberOfCandidateUsers": false
    }
]

export {userSidebarDataSource, pendingTaskDataSource};