module.exports.lookingFor = () => {
    return ({
        ranges: [
            {
                value: 'StrategicPartnership',
                label: 'Strategic Partnership',
                checked: true,
            },
            {
                value: 'CoMarketingCampaign',
                label: 'Co-Marketing Campaign',
                checked: false,
            },
            {
                value: 'BusinessDevelopment',
                label: 'Business Development ',
                checked: false,
            },
            {
                value: 'Other',
                label: 'Other',
                checked: false,
            }
        ],
        title: "What are u looking for?",
        adornment: ""
    });
}

module.exports.mainGoals = () => {
    return ({
        ranges: [
            {
                value: 'NewProduct',
                label: 'Launch a New Product',
                checked: true,
            },
            {
                value: 'CreateServiceProduct',
                label: 'Create service/product',
                checked: false,
            },
            {
                value: 'GenerateValue',
                label: 'Generate value',
                checked: false,
            },
            {
                value: 'PotentialCustomers',
                label: 'Exposure to potential customers',
                checked: false,
            },
            {
                value: 'NewAudience ',
                label: 'Target a new Audience ',
                checked: false,
            },
            {
                value: 'CreateContent',
                label: 'Create Content',
                checked: false,
            },
            {
                value: 'SocialNetwork ',
                label: 'Grow on social network ',
                checked: false,
            },
            {
                value: 'GenerateLeads',
                label: 'Generate Leads',
                checked: false,
            },
            {
                value: 'UserAcquisition',
                label: 'User/Customer Acquisition',
                checked: false,
            },
            {
                value: 'Publicity',
                label: 'Publicity',
                checked: false,
            },
            {
                value: 'Other',
                label: 'Other',
                checked: false,
            }
        ],
        title: "What is your Goal?",
        adornment: ""
    });
}

module.exports.how = () => {
    return ({
        ranges: [
            {
                value: 'SocialMarketingPromotion',
                label: 'Social Marketing Promotion',
                checked: true,
            },
            {
                value: 'InfluencersCampaign',
                label: 'Influencers Campaign (Bloggers, Endorsers, Advocates) ',
                checked: false,
            },
            {
                value: 'TraditionalMarketing',
                label: 'Traditional Marketing',
                checked: false,
            },
            {
                value: 'CrossPromotionCampaign',
                label: 'Cross Promotion Campaign',
                checked: false,
            },
            {
                value: 'Event',
                label: 'Event',
                checked: false,
            },
            {
                value: 'Other',
                label: 'Other',
                checked: false,
            }
        ],
        title: "How?",
        adornment: ""
    });
}

module.exports.where = () => {
    return ({
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
        ranges: [
            {
                value: 'BrandAwareness',
                label: 'Brand Awareness',
                checked: true,
            },
            {
                value: 'BrandImage',
                label: 'Brand Image',
                checked: false,
            },
            {
                value: 'IncreaseSales',
                label: 'Increase Sales',
                checked: false,
            },
            {
                value: 'IncreaseCostumerLoyality',
                label: "Increase Costumer's Loyality",
                checked: false,
            },
            {
                value: 'Other',
                label: 'Other',
                checked: false,
            },
        ],
        title: "What do you want to achieve?",
        error: "Please check at least 1 achievement",
        adornment: ""
    });
}

module.exports.age = () => {
    return ({
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