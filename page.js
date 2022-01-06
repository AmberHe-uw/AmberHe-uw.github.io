var data = {
    "work": [
	    {
			company_name: "China Electronics Technology Group Corporation",
			job_title: "Intern of the development deparment",
			duration: "Dec. 2021 - Mar 2021",
			acheivements: [
				"Collected the internal and external human resources information, established talent pool",
				"Organized forms of recruitment according to the human demand plan",
				"Signed and managed labor contracts, managed labor relations, and resolved labor disputes"
			]
	    },
	    {
			company_name: "Shanghai Yingyi Cultural Communication Ltd",
			job_title: "Intern Product Manager",
			duration: "May 2021 - Aug 2021",
			acheivements: [
				"Led the summer project in product research, design, optimization, and promotion",
				"Improved the users’ experience based on the product research, created a new homepage through HTML, JavaScript, PHP, and MySQL"
			]
	    }
    ],
	"extracurricular": [
		{
			org_name: "Peer to Peer",
			duty:"Co-founder",
			acheivements: [
				"Teamed up with students from Peking University, Tsinghua University, Fudan University and Shanghai Jiaotong University to create a thinking exchange platform for college students from prestigious universities at home and abroad The main projects included the online community culture operation of the "Youth Thought Exchange Circle", the Chinese Youth Campus Forum, and the Fortune Top 500 Lecture",
				"Exported youth communities to establish and brand culture, operated, and promoted online education products, new media operations and cooperation, coordinated and guided the progress of team work, and enhanced team cohesion.",
			]
		},
		{
			org_name: "Overseas Youth Communities",
			duty: "Leader",
			acheivements: [
				"Built a platform for international students to exchange information about studying abroad, share daily life, and answer questions."
			]
		},
		{
			org_name: "Tutoring High School Students Online Project",
			duty: "Leader",
			acheivements: [
				"United and coordinated hundreds of Chinese college students to provide free online Q&A services for tens of thousands of middle school students who were unable to attend classes due to COVID-19",
				"Responsible for market analysis and coordination, Internet marketing planning, mentor and student community management, parent, and student feedback collection",
				"Reported by many official media including Guangdong Satellite TV, Chongqing Satellite TV, People's Daily and China News Network"			
			]
		}
	],
    "projets": [
       {
           name: "Chinese Quora",
		   intro: "A Fully Functional Q&A Website Backend by Python Django",
           acheivements: [
		   	 "Implemented modules of writing articles, messages, notifications, searching, indexing, and caching",
			 "Designed the restful API for the users, and the article data models was back-end by MySQL",
	         "Implemented the fronted with HTML, JavaScript, and Bootstrap",
	         "Used Redis to cache hierarchically and reduced the average indexing time by 50%"
		   ]
       },
       {
           name: 'Interactive Data Application',
           intro: 'An Interactive Data Application That Analyzed the COVID-19 Cases, Specifically Tracked the Cases of COVID-19 in the U.S., Conclude Harms Caused by Coronavirus (e.g., economics), and Analyzed the Vaccination.',
           acheivements: [
		   	 "Produced interactive application through Shiny",
			 "Utilized layouts to create usable and organized interactive systems",
			 "Defined multiple interactive views for a single model of data",
			 "Worked with a team of programmers to analyze data",
			 "Used git to collaborate with a team of programmers"
		   ]
       },
      ]
}

$('document').ready(function() {

    // Add work
    for (var i = 0; i < data.work.length; i++) {
        var proj = data.work[i];
        var html = getWorkHTML(proj);
        $('table#work-table').append(html);
    }


//     // Add research
//     for (var i = 0; i < data.research.length; i++) {
//         var proj = data.research[i];
//         var html = getProjectHTML(proj);
//         $('table#research-table').append(html);
//     }

//     // Add blog
//     for (var i = 0; i < data.blog.length; i++) {
//         var proj = data.blog[i];
//         var html = getProjectHTML(proj);
//         $('table#blog-table').append(html);
//     }
});

function getWorkHTML(proj) {
	console.log(proj + ' ');
	console.log(proj.company_name);
		console.log(proj.job_title);


	var html = '<tr>';
    html += '<td class="description-td"><em>' + proj.company_name + '</em> |' + proj.job_title;
	html += '<br> <ul>';
	for (var i = 0; i < proj.acheivements.length; i++) {
		var acheivement = proj.acheivements[i];
		html += '<li>';
		html += acheivement;
		html += '</li>';
	}
    html += '</ul>';
    html += '</td>';
    html += '</tr>';
    console.log(html);
    return html;
}

function getProjectHTML(proj) {
    var html = '<tr>';
    // Add image
    // Add title and description
    html += '<td class="description-td"><p><em>' + proj.title + '</em>. '
    if ('authors' in proj) {
        html += '<small>' + proj.authors + '</small>';
    }
    html += '<br>' + proj.text + '</p></td>';
    html += '</tr>';
    return html;
}
