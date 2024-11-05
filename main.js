$(document).ready(function(){
    $('#hamburgercic').on('click', function(){
        $('#mini-nav').fadeToggle();
    });

    $('#authh').on('click', function(){
        $('#auth-div').fadeToggle('slow');
    });

    $('li.category').mouseenter(function(){
        var targetDivId = $(this).data('target');
        $('.cat-div').css('display', 'none');
        $('#' + targetDivId).css('display', 'flex');
    });

    $('.cat-div').mouseleave(function(){
        $(this).css('display', 'none');
    });
    
    $('#mp').on('input', function() {
        var value = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * 100;
        $(this).css('--value', value + '%');
    });

    $('.front').css('transform', 'rotateY(360deg)');
    setTimeout(()=>{
        $("#preloader").fadeOut(2000, function(){
            $("#preloader").remove();
        });
    }, 1200)

    $('#to-top').click(function(){
        $('html ,body').animate({scrollTop : 0});
    });

    $('#l-modal, #l-modal-m').click(function(){
        $('#mini-nav').css('display', 'none');
        $('#auth-div').css('display', 'none');
        $('#modal-l').css('display', 'block');
        $('#modal-bg').css('display', 'flex');
    });

    $('#r-modal, #r-modal-m').click(function(){
        $('#mini-nav').css('display', 'none');
        $('#auth-div').css('display', 'none');
        $('#modal-r').css('display', 'block');
        $('#modal-bg').css('display', 'flex');
    });

    $('#modal-r, #modal-l').on('mouseout', function(){
        $('.close-login-modal, #modal-bg').click(function(){
        $('#modal-r').css('display', 'none');
        $('#modal-l').css('display', 'none');
        $('#modal-bg').css('display', 'none');
        });
    })
    
    $('#modal-r, #modal-l').click(function(event) {
        event.stopPropagation();
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('#to-top').fadeIn();
        }
        else{
            $('#to-top').fadeOut();
        }
    });

    $('input[name=rating]').on('click',function(){
        var val = $(this).val();
        localStorage.setItem('stars', val);
        var niz = $('input[name=rating]')
        for (var e of niz) {
            if(e.value <= val){
                e.classList.add('fstar')
            }
            else{
                e.classList.remove('fstar')
            }
        };
    });

    $('#kupac').on('click', function(){
        let html = `<p class='xxs mt-5 mb-2'>Istorija kupovine</p>
        <div class="kupljeno row">
            <div class="col-lg-4 col-sm-6 col-12 m0">
                    <div class="card my-3">
                        <img src="./pexels8.jpg" class="card-img-top" alt="...">
                        <div class="card-body p-2">
                            <h5 class="card-title">Proizvod 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="row mb-2 w-100">
                                <div class="col-6">
                                Kupljeno od:
                                </div>
                                <div class="col-6 row">
                                    <img src="./pexels8.jpg" alt="user" class='user-img'/>
                                    <span>User1210</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 m0">
                    <div class="card my-3">
                        <img src="./pexels8.jpg" class="card-img-top" alt="...">
                        <div class="card-body p-2">
                            <h5 class="card-title">Proizvod 2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="row mb-2 w-100">
                                <div class="col-6">
                                Kupljeno od:
                                </div>
                                <div class="col-6 row">
                                    <img src="./pexels8.jpg" alt="user" class='user-img'/>
                                    <span>User1210</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 m0">
                    <div class="card my-3">
                        <img src="./pexels8.jpg" class="card-img-top" alt="...">
                        <div class="card-body p-2">
                            <h5 class="card-title">Proizvod 3</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="row mb-2 w-100">
                                <div class="col-6">
                                    Kupljeno od:
                                </div>
                                <div class="col-6 row">
                                    <img src="./pexels8.jpg" alt="user" class='user-img'/>
                                    <span>User1210</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <p class='xxs mt-5 mb-2'>Vaši saradnici</p>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Ime</th>
                    <th>Početak saradnje</th>
                    <th>Korisnikova ponuda</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="./pexels8.jpg" alt="slika"></td>
                    <td>PeraP</td>
                    <td>12.2.2022.</td>
                    <td><a href="{{route('services')}}">Više</a></td>
                </tr>
                <tr>
                    <td><img src="./pexels8.jpg" alt="slika"></td>
                    <td>MikaM</td>
                    <td>12.6.2022.</td>
                    <td><a href="{{route('services')}}">Više</a></td>
                </tr>
                <tr>
                    <td><img src="./pexels8.jpg" alt="slika"></td>
                    <td>ŽikaŽ</td>
                    <td>12.2.2042.</td>
                    <td><a href="{{route('services')}}">Više</a></td>
                </tr>
                <tr>
                    <td><img src="./pexels8.jpg" alt="slika"></td>
                    <td>PinkPanter</td>
                    <td>14.2.2082.</td>
                    <td><a href="{{route('services')}}">Više</a></td>
                </tr>
            </tbody>
        </table>`;
        $('#content').html(html);
        $('#kupac').classList.add('active');
        $('#prodavac').classList.remove('active');
    });
    $('#prodavac').on('click', function(){
        let html = `<div class="ponuda">
            <p class='xxs mt-5'>Vaše usluge u ponudi</p>
            <div class="usluge row justify-content-center">
                <div class="usluga col-11 col-md-5">
                    <div class="img">
                        <img src="./pexels8.jpg" alt="slika" class="img-fluid"/>
                    </div>
                    <div class="data">
                        <h4>Usluga 1</h4>
                        <p>Kratki opis usluge. Kratki opis usluge 1.Kratki opis usluge. Kratki opis usluge 1.</p>
                        <h5>980 din</h5>
                    </div>
                </div>
                <div class="usluga col-11 col-md-5">
                    <div class="img">
                        <img src="./pexels8.jpg" alt="slika" class="img-fluid"/>
                    </div>
                    <div class="data">
                        <h4>Usluga 2</h4>
                        <p>Kratki opis usluge. Kratki opis usluge 1.Kratki opis usluge. Kratki opis usluge 1.</p>
                        <h5>1080 din</h5>
                    </div>
                </div>
            </div>
        </div>
        <p class='xxs mt-5 mb-2'>Kupljeno od Vas</p>
        <div class="prodato row">
            <div class="col-lg-4 col-sm-6 col-12 m0">
                    <div class="card my-3">
                        <img src="./pexels8.jpg" class="card-img-top" alt="...">
                        <div class="card-body p-2">
                            <h5 class="card-title">Proizvod 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="row mb-2 w-100">
                                <div class="col-6">
                                    Kupio:
                                </div>
                                <div class="col-6 row">
                                    <img src="./pexels8.jpg" alt="user" class='user-img'/>
                                    <span>User1210</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 m0">
                    <div class="card my-3">
                        <img src="./pexels8.jpg" class="card-img-top" alt="...">
                        <div class="card-body p-2">
                            <h5 class="card-title">Proizvod 2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="row mb-2 w-100">
                                <div class="col-6">
                                    Kupio:
                                </div>
                                <div class="col-6 row">
                                    <img src="./pexels8.jpg" alt="user" class='user-img'/>
                                    <span>User1210</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 m0">
                    <div class="card my-3">
                        <img src="./pexels8.jpg" class="card-img-top" alt="...">
                        <div class="card-body p-2">
                            <h5 class="card-title">Proizvod 3</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="row mb-2 w-100">
                                <div class="col-6">
                                    Kupio:
                                </div>
                                <div class="col-6 row price">
                                    <img src="./pexels8.jpg" alt="user" class='user-img'/>
                                    <span>User1210</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <p class='xxs mt-5 mb-2'>Postavite novu ponudu</p>
        <form action="" method="">
            <div class="form-div row  justify-content-around">
                <input type="text" name="naziv" id="naziv" placeholder="Naziv" class="col-10 col-md-5"/>
                <select name="kategorija" id="kategorija"  class="col-10 col-md-5">
                    <option value="0">Izaberi Kategoriju</option>
                    <option value="1">Kategorija 1</option>
                    <option value="2">Kategorija 2</option>
                    <option value="3">Kategorija 3</option>
                </select>
            </div>
            <div class="form-div row justify-content-around">
                <input type="number" name="dostava" id="dostava" placeholder="Vreme dostave u danima" class="col-10 col-md-5"/>
                <input type="file" name="slika" id="slika" class="col-10 col-md-5"/>
            </div>
            <div class="form-div row justify-content-around">
                <textarea name="opis" id="opis" placeholder="Opis:" class="col-10 col-md-5"></textarea>
                <div  class="col-10 col-md-6">
                    <input type="checkbox" name="reklamacija" id="reklamacija"/>
                    <label for="reklamacija">Mogućnost reklamacije</label>
                </div>
            </div>
            <div class="form-div">
                <input type="submit" value="Postavi"/>
            </div>
        </form>`
        $('#content').html(html);
        $('#prodavac').classList.add('active');
        $('#kupac').classList.remove('active');
    });
});
function getStars(f){
    console.log(f);
    var niz = $('input[name=rating]')
    for (var e of niz) {
        e.classList.remove('fstar')
        if(e.value <= f){
            e.classList.add('fstar')
        }
        else{
            e.classList.remove('fstar')
        }
    };
}
