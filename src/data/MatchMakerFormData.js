module.exports.lookingFor = () => {
    return ({
        saveAs: "lookingFor",
        ranges: [
            {
                value: 'StrategicPartnership',
                label: 'Strategic Partnership',
            },
            {
                value: 'CoMarketingCampaign',
                label: 'Co-Marketing Campaign',
            },
            {
                value: 'BusinessDevelopment',
                label: 'Business Development ',
            },
            {
                value: 'Other',
                label: 'Other',
            }
        ],
        title: "What are u looking for?",
        adornment: ""
    });
}

module.exports.goals = () => {
    return ({
        saveAs: "goals",
        ranges: [
            {
                value: 'NewProduct',
                label: 'Launch a New Product',
            },
            {
                value: 'CreateServiceProduct',
                label: 'Create service/product',
            },
            {
                value: 'GenerateValue',
                label: 'Generate value',
            },
            {
                value: 'PotentialCustomers',
                label: 'Exposure to potential customers',
            },
            {
                value: 'NewAudience ',
                label: 'Target a new Audience ',
            },
            {
                value: 'CreateContent',
                label: 'Create Content',
            },
            {
                value: 'SocialNetwork ',
                label: 'Grow on social network ',
            },
            {
                value: 'GenerateLeads',
                label: 'Generate Leads',
            },
            {
                value: 'UserAcquisition',
                label: 'User/Customer Acquisition',
            },
            {
                value: 'Publicity',
                label: 'Publicity',
            },
            {
                value: 'Other',
                label: 'Other',
            }
        ],
        title: "What is your Goal?",
        adornment: ""
    });
}

module.exports.how = () => {
    return ({
        saveAs: "how",
        ranges: [
            {
                value: 'SocialMarketingPromotion',
                label: 'Social Marketing Promotion'
            },
            {
                value: 'InfluencersCampaign',
                label: 'Influencers Campaign (Bloggers, Endorsers, Advocates) ',
            },
            {
                value: 'TraditionalMarketing',
                label: 'Traditional Marketing',
            },
            {
                value: 'CrossPromotionCampaign',
                label: 'Cross Promotion Campaign',
            },
            {
                value: 'RunningEvent',
                label: 'Running an Event',
            },
            {
                value: 'ExposureEvent',
                label: 'Exposure at Event',
            },
            {
                value: 'BecomeSponsor',
                label: 'Become a Sponsor',
            },
            {
                value: 'Other',
                label: 'Other',
            }
        ],
        title: "How?",
        adornment: ""
    });
}

module.exports.where = () => {
    return ({
        saveAs: "where",
        ranges: [
            {
                value: 'IL',
                label: 'Israel',
            },
            {
                value: 'UK',
                label: 'England',
            },
        ],
        title: "Where?",
        adornment: ""
    });
}

module.exports.achieve = () => {
    return ({
        saveAs: "achieve",
        ranges: [
            {
                value: 'BrandAwareness',
                label: 'Brand Awareness'
            },
            {
                value: 'BrandImage',
                label: 'Brand Image',
            },
            {
                value: 'IncreaseSales',
                label: 'Increase Sales',
            },
            {
                value: 'IncreaseCostumerLoyality',
                label: "Increase Costumer's Loyality",
            },
            {
                value: 'Other',
                label: 'Other',
            },
        ],
        title: "What do you want to achieve?",
        error: "Please check at least 1 achievement",
        adornment: ""
    });
}

module.exports.age = () => {
    return ({
        saveAs: "age",
        ranges: [
            {
                value: '18',
                label: '0-18',
                key: 0,
            },
            {
                value: '30',
                label: '19-30',
                key: 1,
            },
            {
                value: '60',
                label: '31-60',
                key: 2,
            },
            {
                value: '100',
                label: '61+',
                key: 3,
            }
        ]
    });
}

module.exports.gender = () => {
    return ({
        saveAs: "gender",
        ranges: [
            {
                value: 'Male',
                label: 'Male',
            },
            {
                value: 'Female',
                label: 'Female',
            },
        ],
        title: "Gender",
        adornment: ""
    });
}

module.exports.budget = () => {
    return ({
        saveAs: "budget",
        min: 100,
        max: 50000,
        defaultMin: 1000,
        defaultMax: 10000,
        title: "matchmaker.budget",
        adornment: ""
    });
}
