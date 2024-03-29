<div class="admin-tests">
    <h1><i class="fa fa-file-text" aria-hidden="true"></i> Tests</h1>

    <table class="pure-table pure-table-horizontal tablesorter">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Result</th>
                <th>Ratio</th>
                <th>Finished</th>
                <th>Trials</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Last login</th>
                <th>Vetted</th>
                <th>Voir</th>
            </tr>
        </thead>
        <tbody>

        <?php $key=0; foreach (($tests?:array()) as $test): $key++; ?>
            <tr class="<?php echo $key%2 ? '' : 'pure-table-odd'; ?>" id="<?php echo $test->id; ?>">
                <td><?php echo $key; ?></td>
                <td><?php echo $test->username; ?></td>
                <td><?php echo $test->diag_result; ?></td>
                <td><?php echo $test->diag_ratio; ?></td>
                <td><?php echo $test->finished ? "finished" : "unfinished"; ?></td>
                <td><?php echo $distinct_users_trials[$test->users_id]["test_count"]; ?></td>
                <td><?php echo date("Y") - $test->birth_date; ?></td>
                <td><?php echo $test->gender == "M" ? "Homme":"Femme"; ?></td>
                <td><?php echo $test->last_login; ?></td>
                <td><?php echo $test->vetted ? "Invited" : "Normal"; ?></td>
                <td><a href="/admin/test/<?php echo @$test->unique_url; ?>">Voir</a></td>
            </tr>
        <?php endforeach; ?>

           
        </tbody>
    </table>

    <div id="info"></div>
</div>

<script src="/assets/js/jquery-1.12.0.min.js"></script>
<script src="/assets/js/jquery.tablesorter.js"></script>
<script type="text/javascript">

    var testData = <?php echo json_encode($tests); ?>;

    $(function() {

        var id, offset, info, data, html, list, series, i;

        $("table").tablesorter({debug: false});

        var colors = ["#3781C1","#3583B4","#3B84A7","#39859C","#3B8690","#3F8782","#588473","#6C8164","#837B5D","#907660","#9E6E6F","#9F6D7C","#9C6D89","#927099","#8F6FA4","#8073B2"];

        var $info = $("#info");

        $info.hide();

        $("tbody, #info").on("mouseenter", function(){
            $info.show();
        })
        $("tbody, #info").on("mouseleave", function(){
            $info.hide();
        })

        $("tbody tr").on("mouseover", function(){
            id = $(this).attr("id");
            offset = $( this ).offset();

            info = testData.filter(function(test){
                if(test.id == id){
                    return true;
                }
            });

            data = info[0];
            html = "";
            list = "";
            series = [];

            if(data.diag_serie && data.diag_serie.length > 0){
                series = data.diag_serie.split(",");
                list = "<ul class='color-list'>";
                for (i = 0; i < series.length; i++) {
                    list += "<li style='background:"+colors[series[i]]+"';></li>"
                }
                list+="</ul>";
            }

            //html += "<div>birth_date : "+data.birth_date+"</div>";
            //html += "<div>diag_ratio : "+data.diag_ratio+"</div>";
            //html += "<div>diag_result : "+data.diag_result+"</div>";
            
            //html += "<div>finished : "+data.finished+"</div>";
            // html += "<div>gender : "+data.gender+"</div>";
            //html += "<div>id : "+data.id+"</div>";
            //html += "<div>last_login : "+data.last_login+"</div>";
            html += "<div>Interface : "+data.name+"</div>";
            //html += "<div>unique_url : "+data.unique_url+"</div>";
            html += "<div>Name : "+data.username+"</div>";
            html += "<div>Genre : "+(data.gender == "M"? "Homme" : "Femme")+"</div>";
            html += "<div>Email : <a href='mailto:"+data.email+"' target='_blank'> "+data.email+"</a></div>";
            html += "<div>Temps : "+data.test_duration+"</div>";
            //html += "<div>users_id : "+data.users_id+"</div>";
            html += "<div>Lien : <a href='/admin/test/"+data.unique_url+"' target='_blank'>Teste</a></div>";
            //html += "<div>vetted : "+data.vetted+"</div>";

            html += "<div>"+list+"</div>";

            $info.css({
                "left" : (offset.left - 20 )+"px",
                "top" : (offset.top - $info.height()/2 )+"px"
            }).html(html);
        })
        
    });

    
</script>

